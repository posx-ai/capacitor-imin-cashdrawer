package ai.posx.imin.cashdrawer;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CashDrawer")
public class cashdrawerPlugin extends Plugin {

    private cashdrawer implementation = new cashdrawer();

    @PluginMethod
    public void open(PluginCall call) {
        try {
            boolean success = implementation.open(getContext());
            
            JSObject ret = new JSObject();
            ret.put("success", success);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Failed to open cash drawer", e);
        }
    }

    @PluginMethod
    public void getStatus(PluginCall call) {
        try {
            boolean isOpen = implementation.getStatus(getContext());
            
            JSObject ret = new JSObject();
            ret.put("isOpen", isOpen);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Failed to get cash drawer status", e);
        }
    }
}
