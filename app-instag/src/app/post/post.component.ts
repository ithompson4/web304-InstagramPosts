import { Component, OnInit, Input } from '@angular/core';
import { POSTS } from '../mockData/posts';
import { Post } from '../interfaces/data';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[] = POSTS;

  constructor() { 

  }

  @Input() title: string;

  icon = 'favorite_border'; 

  public clickLike() {
    if (this.icon === 'favorite_border') {
        this.icon = 'favorite';
    } else {
        this.icon = 'favorite_border'
    }
}

  ngOnInit() {
  }

}