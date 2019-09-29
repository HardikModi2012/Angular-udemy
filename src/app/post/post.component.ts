import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from 'src/common/app-error';
import { NotFoundError } from 'src/common/not-found-error';
import { BadInput } from 'src/common/bad-input';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts: any[];

  constructor(private service: PostService) {  }

  createPost(input: HTMLInputElement)  {
    let post: any = { title: input.value };
    this.posts.splice(0, 0 , post);
    
    input.value = '';
      
    this.service.create(post)
      .subscribe(
          newPost => {
            post['id'] = newPost.id;
          },
            (error: AppError) =>{
             this.posts.splice(0, 1);

            if(error instanceof BadInput){
                // this.form.setErrors(error.originalError());
            }
            else throw error;
            });
  }

    updatePost(post){
      this.service.update(post
      .subscribe(updatedPost =>
         {
        console.log(updatedPost);
        }));
    }

    deletePost(post){
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);

      this.service.delete(post.id)
      .subscribe(
       null,
      (error: AppError) =>{
        this.posts.splice(index, 0 , post);
        if  (error instanceof NotFoundError)
            alert('this post has already been deleted');
       else throw error;
      });
    }

    ngOnInit() {
      this.service.getAll()
      .subscribe(posts => this.posts = posts);
     }
}
