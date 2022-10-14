import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-incident-problems-form',
  templateUrl: './incident-problems-form.component.html',
  styleUrls: ['./incident-problems-form.component.scss']
})
export class IncidentProblemsFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: [null],
      description: [null],
      type: [null],
      place: [null],
      damage: [null],
      part: [null],
      vehicle: [null]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  onCancel() {

  }

}
