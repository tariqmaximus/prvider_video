import { Component } from '@angular/core';
import { InboxComponent } from "../../components/inbox/inbox.component";


@Component({
  selector: 'app-messages',
  imports: [InboxComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

}
