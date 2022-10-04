import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myPosts: string[] = ['This is a post.', 'This is another post.', 'Yet another post.'];
}
