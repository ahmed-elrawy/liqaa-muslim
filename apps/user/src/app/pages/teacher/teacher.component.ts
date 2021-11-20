import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-arab-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})

export class TeacherComponent implements OnInit {

  teacher = [
    {
      name: "احمد بدر",
      specialty: "تجويد",
      student: 45,
      social: {
        facebook: "",
        behance: "",
        linkedin: ""
      }
    },
    {
      name: "محمد مسعود",
      specialty: "تجويد",
      student: 20,
      social: {
        facebook: "",
        behance: "",
        linkedin: ""
      }
    },
    {
      name: "عمر حسن",
      specialty: "تجويد",
      student: 16,
      social: {
        facebook: "",
        behance: "",
        linkedin: ""
      }
    },
    {
      name: "احمد بدر",
      specialty: "تجويد",
      student: 22,
      social: {
        facebook: "",
        behance: "",
        linkedin: ""
      }
    },
    {
      name: "احمد راوى",
      specialty: "تجويد",
      student: 19,
      social: {
        facebook: "",
        behance: "",
        linkedin: ""
      }
    },
    {
      name: "حسين عيد",
      specialty: "تجويد",
      student: 45,
      social: {
        facebook: "",
        behance: "",
        linkedin: ""
      }
    },
    {
      name: "أحمد بدر",
      specialty: "تجويد",
      student: 60,
      social: {
        facebook: "",
        behance: "",
        linkedin: ""
      }
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
