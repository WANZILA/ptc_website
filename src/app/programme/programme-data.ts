import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IProgramme } from './programme';

// npm install --save angular-in-memory-web-api
export class PROGRAMMESData implements InMemoryDbService{
    createDb(){
        const programmes: IProgramme[] = [
        //     {
        // 'id': 1,
        // 'programme':`   diploma`
        //     },
        //     {
        // 'id': 2,
        // 'programme':`<section class="row">
        //                 <div class="col-12">
        //                     <h2 class="text-edit">Department of Theology</h2>
        //                     <table class="table table-striped table-responsive-md"> 
        //                         <thead class="thead-dark"><tr><th> Course Name</th> <th> Period</th>   
        //                             </tr></thead>
        //                                 <tbody>
        //                                 <tr><td><a href="#">Certificate in Church Ministries </a></td> <td>One year</td></tr>
        //                                 </tbody>                        
        //                     </table>
        //                 </div>
        //                  <div class="col-12">
        //                     <h2  class="text-edit">Department of Community Transformation</h2>
        //                     <table class="table table-striped table-responsive-md"> 
        //                         <thead class="thead-dark"><tr><th> Course Name</th> <th> Period</th>   
        //                         </tr></thead>
        //                         <tbody>
        //                             <tr><td><a [routerLink]="['/programme-diploma-it']">Certificate in Information Communication Technology .</a></td> <td>One year</td></tr>
        //                             <tr><td><a [routerLink]="['/programme-diploma-agri-business']">Certificate in Agri-business.</a></td> <td>One year</td></tr>
        //                         </tbody>                        
        //                     </table>
        //                     <h2 class="text-edit">ENTRY REQUIREMENTS</h2>
        //                     For  Certificate:
        //                     <ol> 
        //                         <li> O-Level certificate with at least 3 passes or its Equivalent </li>
        //                     </ol> 
        
        //                 </div>           
        
        //     </section
            
        // `
        //     }
        ];
        return { programmes };
    }
}

       