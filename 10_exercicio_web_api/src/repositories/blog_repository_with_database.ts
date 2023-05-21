import BlogRepository from "../core/contracts/blog_repository";
import Post from "../core/contracts/post";
import SPost from "../databases/sequelize/models/s_post";
import { PostImpl } from "../core/entities/post_impl";
import AppError from "../core/errors/app_error";
import CommentableBLogRepository from "../core/contracts/commentable_blog_repository";
import Comment from "../core/contracts/comment";
import SComment from "../databases/sequelize/models/s_comment";
import CommentImpl from '../core/entities/comment_impl';

class BlogRepositoryWithDatabase implements BlogRepository, CommentableBLogRepository {
    
    async createPost(post: Post): Promise<void> {
        await SPost.create({id: post.id, text: post.text, likes: post.likes})
    }
    
    async deletePost(id: string): Promise<void> {
        const post = await SPost.findByPk(id);
        if(post) {
            await SPost.destroy({where: post.get()});
        } else {
            throw new AppError('Post Não Encontrado', 404)
        }
    }

    async retrievePost(id: string): Promise<Post> {
        const post = await SPost.findByPk(id);
        if (post) {
            return post?.get() as PostImpl;
        } else {
            throw new AppError('Post Não Encontrado', 404)
        }
    }

    async retrieveAllPosts(): Promise<Post[]> {
        const posts: Post[] = (await SPost.findAll()).map((post) => {
            return post.get() as PostImpl
        });
        return posts;
    }

    async updatePost(post: Post): Promise<void> {
        const currentPost = await SPost.findByPk(post.id);
        if (currentPost) {
            await SPost.update({id: post.id, text: post.text, likes: post.likes}, {where: currentPost.get()});
        } else {
            throw new AppError('Post Não Encontrado', 404);
        }
    }
    
    async createComment(postId: string, comment: Comment): Promise<void> {
        await SComment.create({id: comment.id, text: comment.text, postId: postId})
    }
    
    async retrieveCommnent(postId: string, commentId: string): Promise<Comment> {
        const comment = await SComment.findOne({where: {
            postId: postId,
            id: commentId,
        }});
        if(comment) {
            return comment.get() as CommentImpl;
        } else {
            throw new AppError('Comentário não encontrado', 404)
        }
    }

    async retrieveAllCommentsByPost(postId: string): Promise<Comment[]> {
        const comments = await SComment.findAll({
            where:{ postId: postId }
        })
        return comments.map((comment) => comment.get() as CommentImpl);
    }

    async retrieveAllComments(): Promise<Comment[]> {
        const comments = await SComment.findAll()
        return comments.map((comment) => comment.get() as CommentImpl);
    }

    async updateComment(postId: string, comment: Comment): Promise<void> {
        const currentComment = await this.retrieveCommnent(postId, comment.id)
        await SComment.update({text: comment.text}, {where: {postId: postId, id: currentComment.id}})
    }

    async deleteComment(postId: string, commentId: string): Promise<void> {
        const comment = await this.retrieveCommnent(postId, commentId)
        await SComment.destroy({where: {postId: postId, id: comment.id}})
    }
}

const blogRepositoryWithDatabase: BlogRepositoryWithDatabase = new BlogRepositoryWithDatabase();

export default blogRepositoryWithDatabase;