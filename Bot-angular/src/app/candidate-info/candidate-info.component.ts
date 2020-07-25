import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { BotService } from '../bot.service';

@Component({
  selector: 'app-candidate-info',
  templateUrl: './candidate-info.component.html',
  styleUrls: ['./candidate-info.component.css']
})
export class CandidateInfoComponent implements OnInit {
  user: any=new User();
  message:any;

  constructor(private service:BotService) { }

  ngOnInit(): void {
  }

  public registerNow(){
    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);
      }

}
