import type { OnInit } from "@angular/core";
import { Component, Inject, ViewEncapsulation } from "@angular/core";
import { bootstrapApplication, Title } from "@angular/platform-browser";
import { provideRouter, RouterOutlet } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";

@Component({
  encapsulation: ViewEncapsulation.None,
  imports: [RouterOutlet],
  selector: "app-root",
  standalone: true,
  template: "<router-outlet />",
})
export class RootComponent implements OnInit {
  public constructor(@Inject(Title) private title: Title) {
    this.title = title;
  }

  public ngOnInit(): void {
    this.title.setTitle("Frontend Mentor | Angular Template");
  }
}

bootstrapApplication(RootComponent, {
  providers: [
    provideRouter([
      {
        component: HomeComponent,
        path: "",
      },
    ]),
  ],
}).catch((error) => console.error(error));
