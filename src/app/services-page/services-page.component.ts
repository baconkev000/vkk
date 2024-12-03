import { Component } from '@angular/core';
import { Plan } from '../interfaces/plan';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent {
  plans: Plan[] = [
    {
      title: "Free",
      overview: "Find out what you need with a discovery meeting.",
      price: 0,
      expiration: "No expiration date",
      prevIncluded: "Everything in Free plus:",
      services: ["1 hour discovery meeting", "Plan of action for next steps"],
    },
    {
      title: "Business Development & HR",
      overview: "Start or improve business & hr processes.",
      price: 75,
      expiration: "per hour, billed monthly",
      prevIncluded: "Everything in Free plus:",
      services: ["1 hour meeting, bi-weekly", "Business development plan", "HR & Compliance discovery"],
    },
   {
      title: "Social Media & Marketing",
      overview: "Grow your outreach with industry standard techniques.",
      price: 75,
      expiration: "per hour, billed monthly",
      prevIncluded: "Everything in Free plus:",
      services: ["1 hour meeting, bi-weekly", "Social media & marketing plan", "Logo Design"],
    },
    {
      title: "Web and Software Development",
      overview: "Build, maintain, and/or imporove user friendly applications.",
      price: 60,
      expiration: "No expiration date",
      prevIncluded: "Everything in Free plus:",
      services: ["1 hour meeting, bi-weekly", "Website/Software maintenance", "Website creation"],
    },
  ]
  ngOnInit(){
    /*let plansEl: any = document.getElementById('plansEl');
    console.log(plansEl)
    this.plans.forEach(el => {
      let title = document.createElement('div');
      let overview = document.createElement('div');
      let price = document.createElement('div');
      let expiration = document.createElement('div');
      let prevIncluded = document.createElement('div');
      let services = document.createElement('div');

      title.classList.add("text-2xl", "semibold");
      price.classList.add("text-2xl", "semibold");

      title.innerHTML = el.title;
      overview.innerHTML = el.overview;
      price.innerHTML = "$" + el.price.toString();
      expiration.innerHTML = el.expiration;
      prevIncluded.innerHTML = el.prevIncluded ? el.prevIncluded : " ";
      
      plansEl.append(title,overview,price,expiration,prevIncluded,services);
    });*/
  }

}
