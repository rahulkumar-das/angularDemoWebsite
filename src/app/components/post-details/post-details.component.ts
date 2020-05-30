import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

import { Post } from '../../models/Posts'

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post:Post;
  constructor(
    private route: ActivatedRoute,
    private postservice: PostService
  ) { }

  ngOnInit(): void {

    const id = +this.route.snapshot.paramMap.get('id');
    this.postservice.getPost(id).subscribe(post=>{
      this.post=post;
    })

  }

}
