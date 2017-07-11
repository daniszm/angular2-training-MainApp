
import {BrowserXhr} from "@angular/http";
export class CORSXhr extends BrowserXhr {

  build(): any {
    const xhr: any = super.build();

    xhr.withCredentials = true;

    return xhr;
  }
}
