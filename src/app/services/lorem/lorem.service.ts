import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {ILoremData} from "../../models/ILoremData";
import { HttpClient } from "@angular/common/http";
import {FormHelperService} from "../form-helper/form-helper.service";
import {FormOptionsEnum} from "../../models/formOptionsEnum";

@Injectable()
export class LoremService {
  private readonly http = inject(HttpClient);
  private readonly FormHelperService = inject(FormHelperService);
  public loremData: WritableSignal<ILoremData[]> = signal([]);
  public dataToShow: WritableSignal<ILoremData[]> = signal([]);

  fetchLorem(): void {
    this.http.get<{ loremData: ILoremData[] }>('../assets/loremObjects.json').subscribe(
      (loremData) => {
        this.loremData.set(loremData.loremData);
        this.dataToShow.set(Array(this.loremData()[0]));
      },
      () => {
        alert('Nie udało się załadować danych');
      }
    );
  }

  public stickDataOption() {
    const uniqueLorem = this.pickUniqueLorem();

    if(!uniqueLorem) {
      alert('Błąd unikalności danych.');
      return
    }

    let dataToShow = this.dataToShow();
    dataToShow = this.sortLoremStringsArray(dataToShow)
    this.dataToShow.set([...dataToShow, uniqueLorem]);
  }

  public replaceDataOption() {
    const selectedOption: number = this.FormHelperService.selectedOption()

    switch (selectedOption) {
      case FormOptionsEnum.NotTouched:
        alert('Wybierz opcję');
        break;

      case FormOptionsEnum.Option1:
        this.dataToShow.set(Array(this.loremData()[0]));
        break;

      case FormOptionsEnum.Option2:
        this.dataToShow.set(Array(this.loremData()[1]));
        break;

      case FormOptionsEnum.Option3:
        const data = this.pickRandomLorem();
        this.dataToShow.set(Array(data));
        break;

      default:
        console.error('error switch case')
        break;
    }
  }

  private pickUniqueLorem(loopIteration: number = 0): ILoremData | void {
    if(loopIteration > this.loremData().length) {
      return
    }

    const randomLorem = this.pickRandomLorem();
    const dataToShow = this.dataToShow();
    if (dataToShow.find(data => data.id === randomLorem.id)) {
      return this.pickUniqueLorem(loopIteration + 1);
    } else {
     return randomLorem;
    }
  }

  private pickRandomLorem(): ILoremData {
    const loremData = this.loremData();
    const randomIndex: number = Math.floor(Math.random() * loremData.length);
    return loremData[randomIndex];
  }

  sortLoremStringsArray(stringsArray :ILoremData[]): ILoremData[] {
    return stringsArray.sort((a, b) => a.textContent.localeCompare(b.textContent));
  }
}
