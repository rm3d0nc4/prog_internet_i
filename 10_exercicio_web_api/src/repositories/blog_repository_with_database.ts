import BlogRepository from "../core/contracts/blog_repository";
import Post from "../core/contracts/post";
import SPost from "../databases/sequelize/models/s_post";
import { PostImpl } from "../core/entities/post_impl";
import AppError from "../core/errors/app_error";

class BlogRepositoryWithDatabase implements BlogRepository {

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

}

const blogRepositoryWithDatabase: BlogRepositoryWithDatabase = new BlogRepositoryWithDatabase();

export default blogRepositoryWithDatabase;