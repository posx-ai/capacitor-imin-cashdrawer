// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "PosxIminCashdrawer",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "PosxIminCashdrawer",
            targets: ["cashdrawerPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "cashdrawerPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/cashdrawerPlugin"),
        .testTarget(
            name: "cashdrawerPluginTests",
            dependencies: ["cashdrawerPlugin"],
            path: "ios/Tests/cashdrawerPluginTests")
    ]
)