import {Component} from '@angular/core';
import {TechnologiesService} from './technologies.service';
import {Technology} from './technology.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  technologies = [
    {
      name: 'JavaScript',
      time: 10,
      id: this.generateId()
    },
    {
      name: 'TypeScript',
      time: 15,
      id: this.generateId()
    }
  ];

  constructor(
    private technologiesService: TechnologiesService
  ) {
  }

  onAddServer(name: string) {
    this.technologies.push({
      name,
      time: 5,
      id: this.generateId()
    });
  }

  save(name: string) {
    const tech = [
      {
        name,
        time: 5,
        id: this.generateId()
      }
    ];
    this.technologiesService.saveData(tech)
      .subscribe(
        (data) => {
          console.log(data);
        }
      );
  }

  getData() {
    this.technologiesService.getData().subscribe((data: Technology[]) => {
      this.technologies = data;
      console.log(data);
    });
  }

  private generateId() {
    return Math.round(Math.random() * 100);
  }
}
