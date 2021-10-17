import { Component, OnInit } from '@angular/core';
import { DatePipe, KeyValue } from '@angular/common';
import { MawakeetElsalahService } from '../../shared/services/mawakeet-elsalah.service';

@Component({
  selector: 'ng-arab-mawakeet-elsalah',
  templateUrl: './mawakeet-elsalah.component.html',
  styleUrls: ['./mawakeet-elsalah.component.scss']
})
export class MawakeetElsalahComponent implements OnInit {

  constructor(
    private MawakeetElSalahService: MawakeetElsalahService,
    private datePipe: DatePipe
    ){}  

  remaning_total_time :string | undefined

  date?: Date
  curr_date!: any
  curr_time!: any
  city!:string 
  salawatAPI?: any
  buff_Sala :string | undefined

ngOnInit() {
    this.date = new Date();
    this.getsalawatAPI();  
    this.curr_date = this.datePipe.transform(this.date,"yyyy-MM-dd");  
  }  
  getsalawatAPI() {        
    this.MawakeetElSalahService.getRegion().subscribe((res:any)=>{  
      this.city = res.city
      this.MawakeetElSalahService.getMawkeet(this.city, this.curr_date).subscribe((res:any)=>{  
        this.salawatAPI = res.results.datetime[0].times
        this.getNearst()
     });
    });  
  }  


getRemainingTime(arr: { [x: string]: number; }){
  let curr_time_hour: number  = Math.floor(this.curr_time) 
  let curr_time_min: number = Math.floor(+(this.curr_time - Math.floor(this.curr_time)).toFixed(2)*100) // example: (123.456).toFixed(2) = 123.45
  let next_salah_hour: number = Math.floor(arr[this.buff_Sala!])
  let next_salah_min: number = Math.floor(+(arr[this.buff_Sala!] - Math.floor(arr[this.buff_Sala!])).toFixed(2)*100)
  let remaining_m : number =(60 - curr_time_min) + next_salah_min
  let remaining_h : number= 0;

  if (this.curr_time <(arr[this.buff_Sala!]+12))
  { 
    remaining_h = ((next_salah_hour-curr_time_hour)-1)*60
    if((remaining_h+remaining_m) >= 60 )
    {
      this.remaning_total_time =`${Math.floor((remaining_h+remaining_m)/60)}:${(remaining_h+remaining_m)%60} `
    }else
    {
      this.remaning_total_time = `${(remaining_h+remaining_m)}m`
    }
  } else {
    remaining_h = (24- Math.floor(this.curr_time) + Math.floor(arr[this.buff_Sala!])) * 60
    if((remaining_h+remaining_m) >= 60 )
    {
      this.remaning_total_time =`${Math.floor((remaining_h+remaining_m)/60)-1}:${(remaining_h+remaining_m)%60} `
    }else
    {
      this.remaning_total_time = `${(remaining_h+remaining_m)}`
    }
  }
  this.remaning_total_time = `${this.remaning_total_time} المتبقي`
}
 

 



getNearst(){
  this.curr_time = this.datePipe.transform(this.date,"HH.mm");
  this.curr_time = +this.curr_time
  let buff_time = 100;


  let salawat :any={
    الفجر: +this.salawatAPI?.Fajr.replace(":","."), 
    الظهر: +this.salawatAPI?.Dhuhr.replace(":","."), 
    العصر: +this.salawatAPI?.Asr.replace(":","."),
    المغرب: +this.salawatAPI?.Maghrib.replace(":","."),
    العشاء: +this.salawatAPI?.Isha.replace(":",".")
   }
   
   this.salawatAPI = { 
    العشاء: this.to12Hour(this.salawatAPI?.Isha),
    المغرب: this.to12Hour(this.salawatAPI?.Maghrib),
    العصر:this.to12Hour( this.salawatAPI?.Asr),
    الظهر: this.to12Hour(this.salawatAPI?.Dhuhr), 
    الفجر: this.to12Hour(this.salawatAPI?.Fajr), 


   }

  for (let key in salawat) {
    


        // معاد الصلاه اكبر من الوقت الحالي 
   if (salawat[key] > this.curr_time  ){
        console.log(salawat[key])
      if(salawat[key]-this.curr_time<buff_time){

        buff_time =salawat[key]-this.curr_time
        this.buff_Sala = key
        
      }
    } else 
     {

      if (this.curr_time > salawat.العشاء && salawat[key]-this.curr_time +24 <buff_time ) {
        console.log(salawat[key])
        console.log(this.curr_time)
        if(salawat[key]-this.curr_time + 24 <buff_time){
          buff_time =salawat[key]-this.curr_time
          this.buff_Sala = key
      } 
      }
    }  
  }

  this.getRemainingTime(salawat)


}

// Preserve original property order
originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
  return 0;
}

to12Hour (time:any) {
  // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
}

}
