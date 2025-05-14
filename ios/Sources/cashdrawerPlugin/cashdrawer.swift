import Foundation

@objc public class cashdrawer: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
