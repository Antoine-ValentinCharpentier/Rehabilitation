# Expo Router Example

Use [`expo-router`](https://docs.expo.dev/router/introduction/) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-expo-app -e with-router
```

## 📝 Notes

- [Expo Router: Docs](https://docs.expo.dev/router/introduction/)


## Install / Deploy the app
- Install EAS CLI:
``npm install -g eas-cli``
- Log in to EAS using your Expo credentials
Execute : ``eas login``
Then follow the on-screen instructions to provide your email address and password.
- Build the APK
``eas build -p android --profile preview``
This will trigger the APK building process for Android. Wait for the process to complete.
- Open the link provided at the end of the build or scan the QR code displayed in your terminal.
- Next, on the web page that opens, look for the button to download the built version of your application. This might be labeled as a button like "Download Build."
![Alt text](assets/doc/download_build.png)
Click on this button to download the APK file to your local machine.
- You can now share your APK file with others using methods such as a USB cable, email, or other file-sharing means.
- Once the APK file is available on the target device, you can install it by following these steps:
    1. On the device, go to Settings.
    2. Select "Security" or "Privacy," depending on the type of device.
    3. Enable the "Unknown sources" or "Install from unknown sources" option.
    4. Use a file manager to locate the downloaded APK file.
    5. Click on the APK file to initiate the installation process.
You can now use the apk on the target device !!! 
