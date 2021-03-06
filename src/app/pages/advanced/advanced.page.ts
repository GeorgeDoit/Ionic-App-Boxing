import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import * as lessons from "../../../models/advanced.json";

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.page.html',
  styleUrls: ['./advanced.page.scss'],
})

export class AdvancedPage implements OnInit {

  public lessonId: any;
  public warmup: any;
  public exersices: any;
  public exersice: any;
  public warmupUrls = [];

  constructor(

    public alertController: AlertController,
    private storage: Storage,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {

    this.lessonId = this.route.snapshot.paramMap.get("id");

    this.warmup = lessons.warmup;
    this.exersices = lessons.exercises;

    for (let i in this.warmup) {

      this.warmupUrls[i] = lessons.warmup[i].url;

    }

  }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      subHeader: message,
      buttons: ["OK"]
    });

    await alert.present();
  }

  Explanation(exersice) {
    this.presentAlert(exersice.title, exersice.explanation);
  }

  StartExercising() {
    let lesson = "advanced-start/" + this.lessonId;
    this.router.navigateByUrl(lesson);
  }
}
