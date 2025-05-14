package ai.posx.imin.cashdrawer;

import android.content.Context;
import android.util.Log;

import com.imin.library.IminSDKManager;

public class cashdrawer {
    private static final String TAG = "IminCashDrawer";

    public boolean open(Context context) {
        try {
            IminSDKManager.opencashBox(context);
            return true;
        } catch (Exception e) {
            Log.e(TAG, "Failed to open cash drawer", e);
            return false;
        }
    }

    public boolean getStatus(Context context) {
        try {
            return IminSDKManager.isCashBoxOpen(context);
        } catch (Exception e) {
            Log.e(TAG, "Failed to get cash drawer status", e);
            return false;
        }
    }
}
