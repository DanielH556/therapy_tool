export class AppService {
   public async getPosts(): Promise<any> {
       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
       return await response.json();
   }
}