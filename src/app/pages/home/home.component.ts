import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  formValue!: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);
  private endpoint = 'https://modelslab.com/api/v6/realtime/text2img';

  response = {
    success: '',
    error: '',
    isLoading: false,
    imgUrl: '',
    prompt: '',
  };

  // private LangApi = inject(LanguageApiService);

  constructor(private http: HttpClient) {
    this.formValue = this.fb.group({
      text: new FormControl(null, [Validators.required]),
    });
  }

  submitForm(values: FormGroup) {
    this.response = {
      ...this.response,
      isLoading: true,
    };
    const valueF = this.formValue.value;
    const prompt = valueF.text as string;

    this.response = {
      ...this.response,
      isLoading: true,
      success: 'Please wait while generating image ....',
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = JSON.stringify({
      key: '9xM3ZW7ErbzlGCkzDLol5tqZvqpWqdsb1L8kKX5vZOyRdepT4FS16A5cHJzh',
      prompt: prompt,
      negative_prompt: 'good quality',
      width: '512',
      height: '512',
      safety_checker: false,
      seed: null,
      samples: 1,
      base64: false,
      webhook: null,
      track_id: null,
    });

    this.http
      .post(this.endpoint, body, {
        headers: headers,
      })
      .subscribe((res) => {
        const resp = res as any;
        if (resp.status == 'error') {
          this.response = {
            isLoading: false,
            success: '',
            error:
              "Sorry for incovinience , w're in service mode due to limited resources...",
            prompt: '',
            imgUrl: '',
          };
        } else if (resp.status == 'success' && resp.output != null) {
          const urls = resp.output as string[];

          this.response = {
            ...this.response,
            isLoading: false,
            success: 'Image is generated successfull',
            error: '',
            imgUrl: urls[0],
          };
        } else if (resp.status == 'processing') {
          this.response = {
            ...this.response,
            isLoading: true,
            success:
              "Oooh fine , w're about to generate image for you , just a minute ..click button below to view image",
          };
        }
        console.log(this.response);
      });
  }
}
