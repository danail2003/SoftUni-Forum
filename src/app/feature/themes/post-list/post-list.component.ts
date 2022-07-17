import { Component, OnInit } from '@angular/core';
import { IPost } from '../../../core/interfaces';
import { PostsService } from '../../../core/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postsList: IPost[];


  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.loadPosts(5).subscribe(posts => {
      this.postsList = posts;
    });
  }

}
