import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import{Board} from '../Models/boards.models';
import{Column} from '../Models/column.models';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  boards = new Board("Test",[
    new Column("Idea",[
      "Some Random Idea",
      "Another random idea"
    ]),
    new Column("Research",[
      "No code low code",
      "Leanguage interpreter",
      "KanbanBoards"
    ]),
    new Column("Todo",[
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep Fall asleep Fall asleep Fall asleep  Fall asleep  Fall asleep  Fall asleep  Fall asleep  Fall asleep  Fall asleep  Fall asleep  Fall asleep  Fall asleep  Fall asleep  Fall asleep  Fall asleep  Fall asleep  Fall asleep  Fall asleep  Fall asleep  Fall asleep  Fall asleep '
    ]),
    new Column("Done",[
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Check e-mail',
      'Walk dog'
    ])
  ]);

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
