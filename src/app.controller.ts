import { Body, Controller, Get, Param, ParseIntPipe, Post, Redirect, Render } from '@nestjs/common';
import { articles } from "./article/articles";
import { Article } from "./article/article.model";

@Controller()
export class AppController {
  @Get()
  @Render('index')
  index(): object {
    return {
      title: 'Hello!',
      articles
    }
  }

  @Get('create')
  @Render('create-article')
  getForm(): void {
    return;
  }

  @Post('articles')
  @Redirect('/', 301)
  create(@Body() body: any): void {
    const id: number = articles.length + 1;
    const article: Article = new Article(body.title, body.content, id);
    articles.push(article);
  }

  @Get(':id')
  @Render('article')
  getById(@Param('id', ParseIntPipe) id: number): Article {
    return articles.find(article => article.id === id);
  }
}
