import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() color:string;
  @ViewChild(TemplateRef,{static:true}) template:TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
