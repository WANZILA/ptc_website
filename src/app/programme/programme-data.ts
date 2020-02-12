//import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Programme } from './programme';

// npm install --save angular-in-memory-web-api
export const PROGRAMMES: Programme[] = [
    {
        'id': 1,
        'programme':`   <section class="row">
                            <div class="col-12">
                                <h2 class="text-edit">Department of Theology</h2>
                                <table class="table table-striped table-responsive-md"> 
                                    <thead class="thead-dark"><tr><th> Course Name</th> <th> Period</th>   
                                        </tr></thead>
                                            <tbody>
                                                <tr><td><a [routerLink]="['/programme-diploma-bible-theology']">Diploma in Bible Theology.</a></td> <td>Two years</td></tr>
                                            </tbody>                        
                                </table>
                            </div>
                            <div class="col-12">
                                    <h2  class="text-edit">Department of community Transformation</h2>
                                    <table class="table table-striped table-responsive-md"> 
                                        <thead class="thead-dark"><tr><th> Course Name</th> <th> Period</th>   
                                        </tr></thead>
                                        <tbody>
                                            <tr><td><a [routerLink]="['/programme-diploma-it']">Diploma in Information Communication Technology.</a></td> <td>Two years</td></tr>
                                            <tr><td><a [routerLink]="['/programme-diploma-agri-business']">Diploma in Agri-business.</a></td> <td>Two years</td></tr>
                                            <tr><td><a [routerLink]="['/programme-diploma-socail-dev']">Diploma in Social Development. </a></td> <td>Two years</td></tr>
                                            <tr><td><a [routerLink]="['/programme-diploma-child-dev']">Diploma in Child Development.</a></td> <td>Two years</td></tr>
                                            <tr><td><a [routerLink]="['/programme-diploma-counseling-and-guidance']">Diploma in Counseling and guidance.</a></td> <td>Two year</td></tr>
                                        </tbody>                        
                                    </table>
                                    <h2 class="text-edit">ENTRY REQUIREMENTS</h2>
                                    For  Diploma                    
                                    <ol>  <li>O-Level and A-level certificate with at least 1 principle pass </li>
                                        <li>Certificate from a recognized institution or its equivalent </li>
                                    </ol> 
                            </div>              

                        </section>`
    },
    {
        'id': 2,
        'programme':`<section class="row">
                        <div class="col-12">
                            <h2 class="text-edit">Department of Theology</h2>
                            <table class="table table-striped table-responsive-md"> 
                                <thead class="thead-dark"><tr><th> Course Name</th> <th> Period</th>   
                                    </tr></thead>
                                        <tbody>
                                        <tr><td><a href="#">Certificate in Church Ministries </a></td> <td>One year</td></tr>
                                        </tbody>                        
                            </table>
                        </div>
                         <div class="col-12">
                            <h2  class="text-edit">Department of Community Transformation</h2>
                            <table class="table table-striped table-responsive-md"> 
                                <thead class="thead-dark"><tr><th> Course Name</th> <th> Period</th>   
                                </tr></thead>
                                <tbody>
                                    <tr><td><a [routerLink]="['/programme-diploma-it']">Certificate in Information Communication Technology .</a></td> <td>One year</td></tr>
                                    <tr><td><a [routerLink]="['/programme-diploma-agri-business']">Certificate in Agri-business.</a></td> <td>One year</td></tr>
                                </tbody>                        
                            </table>
                            <h2 class="text-edit">ENTRY REQUIREMENTS</h2>
                            For  Certificate:
                            <ol> 
                                <li> O-Level certificate with at least 3 passes or its Equivalent </li>
                            </ol> 
        
                        </div>           
        
            </section
            
        `
    }
        ];
       
