import { NextFunction, Request, Response, Router, response } from 'express';
import { PostImpl } from '../core/entities/post_impl';
import Post from '../core/contracts/post';
import BlogRepository from '../core/contracts/blog_repository';
import blogRepositoryWithMicroblog from '../repositories/blog_repository_with_microblog';
import blogRepositoryWithDatabase from '../repositories/blog_repository_with_database';


export const postRoutes = Router();


// const repository: BlogRepository = blogRepositoryWithMicroblog; 
const repository: BlogRepository = blogRepositoryWithDatabase; 

postRoutes.get('/posts', async (request: Request, response: Response, next: NextFunction) => {
    try {
        const posts: Post[] =  await repository.retrieveAllPosts();
        return response.status(200).json(posts)            
    } catch (error) {
        next(error)
    }

})
postRoutes.get('/posts/:id', async (request: Request, response: Response, next: NextFunction) => {
    try {
        const {id} = request.params;
        const post = await repository.retrievePost(id as string)
        return response.status(200).json(post)
    } catch (error) {
        next(error)
    }
    
})
postRoutes.delete('/posts/:id', async (request: Request, response: Response, next: NextFunction) => {
    try {
        const {id} = request.params;
        await repository.deletePost(id as string);
        return response.status(204).send();
    } catch (error) {
        next(error)
    }
    
})

postRoutes.post('/posts', async (request: Request, response: Response, next: NextFunction) => {
    try {
        const {text} = request.body;
        const post = new PostImpl(text);
        await repository.createPost(post);
        return response.status(201).json(post);
    } catch (error) {
        next(error)
    }

})

postRoutes.put('/posts/:id', async (request: Request, response: Response, next: NextFunction) => {
    try {
        const {id} = request.params;
        const post: Post = await repository.retrievePost(id as string);
        const {text, likes} = request.body;

        post.text = text ?? post.text;
        post.likes = likes ?? post.likes;
        
        repository.updatePost(post);

        return response.status(200).send();
    } catch (error) {
        next(error)
    }

})
postRoutes.patch('/posts/:id', async (request: Request, response: Response, next: NextFunction) => {
    try {
        const {id} = request.params;
        const post: Post = await repository.retrievePost(id as string);
        const {text, likes} = request.body;

        post.text = text ?? post.text;
        post.likes = likes ?? post.likes;
        
        repository.updatePost(post);

        return response.status(200).send();
    } catch (error) {
        next(error)
    }

})
postRoutes.patch('/posts/:id/like', async (request: Request, response: Response, next: NextFunction) => {
    try {
        const {id} = request.params;
        const post: Post = await repository.retrievePost(id as string);
        post.likes++;
        await repository.updatePost(post);
    
        return response.status(200).send();
    } catch (error) {
        next(error)
    }

})