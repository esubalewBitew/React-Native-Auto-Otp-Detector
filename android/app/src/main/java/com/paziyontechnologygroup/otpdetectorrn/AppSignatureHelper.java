// package com.paziyontechnologygroup.otpdetectorrn;

// import android.content.Context;
// import android.content.ContextWrapper;
// import android.content.pm.PackageInfo;
// import android.content.pm.PackageManager;
// import android.content.pm.Signature;
// import android.util.Base64;
// import android.util.Log;

// import java.security.MessageDigest;
// import java.security.NoSuchAlgorithmException;
// import java.util.ArrayList;
// import java.util.Collections;
// import java.util.List;

// public class AppSignatureHelper extends ContextWrapper {

//     private static final String TAG = AppSignatureHelper.class.getSimpleName();

//     public AppSignatureHelper(Context base) {
//         super(base);
//     }

//     public List<String> getAppSignatures() {
//         try {
//             PackageInfo packageInfo = getPackageManager()
//                     .getPackageInfo(getPackageName(), PackageManager.GET_SIGNATURES);

//             List<String> signatures = new ArrayList<>();
//             for (Signature signature : packageInfo.signatures) {
//                 String hash = hash(packageInfo.packageName, signature.toCharsString());
//                 signatures.add(hash);
//             }
//             return signatures;
//         } catch (PackageManager.NameNotFoundException e) {
//             Log.e(TAG, "Unable to find package to obtain hash.", e);
//         }
//         return Collections.emptyList();
//     }

//     private String hash(String packageName, String signature) {
//         String appInfo = packageName + " " + signature;
//         try {
//             MessageDigest messageDigest = MessageDigest.getInstance("SHA-256");
//             byte[] hashBytes = messageDigest.digest(appInfo.getBytes());
//             return Base64.encodeToString(hashBytes, Base64.NO_WRAP);
//         } catch (NoSuchAlgorithmException e) {
//             Log.e(TAG, "Unable to get MessageDigest. signature=" + signature, e);
//         }
//         return "";
//     }
// }
