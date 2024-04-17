import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ArticleService } from '../../services/articles/article.service';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule

  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent implements OnInit {

  articles: any[] = [];

  constructor(private articleservice: ArticleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void {
    this.articleservice.getArticle().subscribe(
      (response) => {
        this.articles = response;
      },
      (error) => {
        console.error('Error fetching article:', error);
      }
    );
  }

  deleteArticle(id: number): void {
    if (confirm('Are you sure you want to delete this article?')) {
      this.articleservice.deleteArticle(id).subscribe(
        () => {
          this.articles = this.articles.filter(articles => articles.id !== id);
        },
        (error) => {
          console.error('Error deleting article:', error);
        }
      );
    }
  }

  goToEdit(id: number): void {
    this.router.navigate(['/edit-article', id], { relativeTo: this.route });
  }
}
