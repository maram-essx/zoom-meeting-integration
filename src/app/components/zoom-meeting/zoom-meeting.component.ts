import { Component } from '@angular/core';

@Component({
  selector: 'app-zoom-meeting',
  templateUrl: './zoom-meeting.component.html',
  styleUrls: ['./zoom-meeting.component.scss']
})
export class ZoomMeetingComponent {
  async ngAfterContentInit(): Promise<any> {
    const { ZoomMtg } = await import('@zoomus/websdk');
    ZoomMtg.setZoomJSLib('https://source.zoom.us/lib', '/av');
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();
    let payLoad = {
      meetingNumber: '85336256970',
      passWord: 'wA2t3y',
      sdkKey: 'BjTCj1lYRIqxsByfFKECg',
      sdkSecret: '1FiqH2CgYVOOVJ06FJBd4FZ8oYQSUMsj',
      userName: 'maroma ',
      userEmail: '',
      role: '0',
      leaveUrl: 'https://localhost:4200',
    };
    ZoomMtg.generateSDKSignature({
      meetingNumber: payLoad.meetingNumber,
      role: payLoad.role,
      sdkKey: payLoad.sdkKey,
      sdkSecret: payLoad.sdkSecret,
      success: function (signature: any) {
        ZoomMtg.init({
          leaveUrl: payLoad.leaveUrl,
          success: function (data: any) {
            ZoomMtg.join({
              meetingNumber: payLoad.meetingNumber,
              passWord: payLoad.passWord,
              sdkKey: payLoad.sdkKey,
              userName: payLoad.userName,
              userEmail: payLoad.userEmail,
              signature: signature.result,
              tk: '',
              success: function (data: any) {
                console.log(data);
              },
              error: function (error: any) {
                console.log('----error join---->', error);
              },
            });
          },
          error: function (error: any) {
            console.log('----error join---->', error);
          },
        });
      },
      error: function (error: any) {},
    });
  }
  constructor() {}
}
