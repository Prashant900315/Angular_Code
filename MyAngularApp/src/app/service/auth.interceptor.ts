import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginserviceService } from "./loginservice.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
    constructor(private loginservice:LoginserviceService)
    {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       // throw new Error("Method not implemented.");
        let newReq=req;
        let token=this.loginservice.getToken()
        console.log("Interceptor="+token);
        if(token!=null){
            console.log("here");
            newReq=newReq.clone({setHeaders:{Authorization:'Bearer (token)'}})
        }
        return next.handle(newReq);
    }
        
}