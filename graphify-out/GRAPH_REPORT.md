# Graph Report - house-control  (2026-10-23)

## Corpus Check
- 165 files · ~452,531 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 14 file(s) not represented in the graph (top: .css 4, (none) 3, .xcconfig 2)

## Summary
- 2673 nodes · 6618 edges · 131 communities (105 shown, 26 thin omitted)
- Extraction: 87% EXTRACTED · 13% INFERRED · 0% AMBIGUOUS · INFERRED: 855 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- HouseCore Agent Gateway
- HouseCore Plan Editor
- Web UI Panel
- iOS Settings View
- HouseCore Device Hub
- Web Editor Connections
- Web Editor Editor
- iOS Devices View
- SmartLife Cloud Service
- HouseCore HomeKit Service
- macOS App Delegate
- iOS Pairing View
- Widgets House Model
- HouseCore Home Assistant Service
- Widgets Style
- SmartLife Tuya Service
- Widgets Components
- HouseCore Hue Service
- Widgets Device Widgets
- Web App Entrypoint
- HouseCore Home Snapshot
- iOS Home Web
- Web Agent Plan Edit
- Widgets Widget Main
- Web App Store
- HouseCore HomeKit Mapper
- HouseCore Sync Client
- HouseCore Secret Store
- HouseCore Shared Home
- HouseCore Device Service
- iOS Connection Views
- macOS Cloudflare Tunnel
- Widgets Controls
- macOS Web Host
- Device Lab Hue
- Widgets Intents
- HouseCore Web Assets
- iOS App Model
- macOS Panel Controller
- Widgets Providers
- HouseCore Service Discovery
- HouseCore Plan Store
- iOS Sync Client
- 128-Bit Link Secret
- Web Agent Tools
- HouseCore Linked Cloud
- iOS README
- HouseCore Sync Server
- 3D Isometric Floor Plan Render
- iOS SmartLife View
- macOS Island Controller
- Widgets Controls (2)
- iOS Root View
- SmartLife Platform Core
- Repo Service Tests
- Connections Screen
- Widgets Screen
- macOS Agent Controller
- AC Option Tiles
- Active State Accent Glow
- Arbitrum Logo
- iOS App Model (2)
- iOS Quick Actions
- macOS Sync Windows
- Widgets Intents (2)
- iOS Quick Actions (2)
- HouseCore JSON Value
- HouseCore Remote Catalog Service
- HouseCore Sync Protocol
- 128-Bit Link Key
- Activity Based Lighting Scenes
- Floor Plan Docs
- Web App Furniture
- HouseCore Sync Tests
- SmartLife Infrared Remote
- 2D Floor Plan Editing Canvas
- Web Package
- HouseCore Home Snapshot (2)
- Device Lab HomeKit
- Web App World
- 2D Floor Plan Canvas
- Active Scene Highlight
- macOS Agent Controller (2)
- macOS Login Item
- HouseCore Service Discovery (2)
- HouseCore Widget Bridge
- iOS Editor Screen
- Web App Config
- Device Lab README
- Device Lab Package
- Web App Kit
- HouseCore QR Code
- Camera Facing Walls Cut Away
- HouseCore Sync Protocol (2)
- Web App Lighting
- Web Island Overlay
- Web App AC
- Device Lab Onboard
- 2008 Refusal Replay
- Amber Window Cutout
- Repo Release
- Repo Widget Tests
- macOS Agent Controller (3)
- Widgets Make Sample
- Widgets Intents (3)
- Device Lab Manifest
- Web App Lights (2)
- Widgets Intents (4)
- Amber Square Window Accent
- App Icon Preview Imageset
- iOS Quick Actions (3)
- Widgets Intents (5)
- macOS Agent Controller (4)
- Widgets Package
- Device Lab Hue (2)
- Widgets Style (2)
- HouseCore Sync Protocol (3)
- Repo FUNDING
- Scripts Build App
- Scripts Build iOS
- Scripts iOS Sim
- Scripts Release Mac
- Device Lab Home Assistant
- MIT Licence

## God Nodes (most connected - your core abstractions)
1. `AppModel` - 81 edges
2. `AppDelegate` - 62 edges
3. `h()` - 60 edges
4. `bootEditor()` - 56 edges
5. `DeviceHub` - 54 edges
6. `PlanEditor` - 41 edges
7. `AgentController` - 41 edges
8. `HomeAssistantService` - 40 edges
9. `HomeKitService` - 39 edges
10. `icon()` - 38 edges

## Surprising Connections (you probably didn't know these)
- `.current` --calls--> `SharedHome`  [INFERRED]
  widgets/Sources/Intents.swift → core/Sources/HouseCore/SharedHome.swift
- `HTTP Server Port 8123` --conceptually_related_to--> `Home Assistant Integration`  [INFERRED]
  tools/lab/homeassistant/configuration.yaml → docs/connections.md
- `Apple Home / HomeKit Integration` --conceptually_related_to--> `Lab HomeKit Bridge`  [INFERRED]
  docs/connections.md → tools/lab/README.md
- `AgentController` --calls--> `AgentGateway`  [INFERRED]
  macos/Sources/HouseControl/AgentController.swift → core/Sources/HouseCore/AgentGateway.swift
- `AgentController` --calls--> `LoopbackHTTPServer`  [INFERRED]
  macos/Sources/HouseControl/AgentController.swift → core/Sources/HouseCore/AgentHTTP.swift

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **AI Access Request Path** — docs_ai_access_cloudflare_quick_tunnel, docs_ai_access_loopback_7419, docs_ai_access_128_bit_key, docs_ai_access_action_links, docs_ai_access_mcp_server [EXTRACTED 1.00]
- **Widget Snapshot and Action Pipeline** — docs_widgets_home_snapshot, docs_widgets_app_group_shared_home, docs_widgets_app_intent_tap, docs_widgets_darwin_notification, docs_widgets_mac_widget_path, docs_widgets_iphone_widget_path [EXTRACTED 1.00]
- **Device Platform Integration Surface** — docs_connections_home_assistant, docs_connections_philips_hue, docs_connections_apple_home, docs_smart_life_qr_signin, docs_floor_plan_device_links [INFERRED 0.85]
- **Crypto networks accepted for project donations** — docs_support_bitcoin_bitcoin_logo, docs_support_ethereum_ethereum_logo, docs_support_base_base_logo, docs_support_bnb_bnb_chain_logo, docs_support_arbitrum_arbitrum_logo, docs_support_ton_ton_logo, docs_support_tron_tron_logo [INFERRED 0.85]
- **Scannable donation QR codes pairing address with network** — docs_support_qr_bitcoin_qr_code, docs_support_qr_evm_qr_code, docs_support_qr_ton_qr_code, docs_support_qr_tron_qr_code [INFERRED 0.85]
- **EVM-compatible networks reachable through one 0x address** — docs_support_ethereum_ethereum_logo, docs_support_base_base_logo, docs_support_bnb_bnb_chain_logo, docs_support_arbitrum_arbitrum_logo [INFERRED 0.85]
- **Ephemeral Link Lifecycle Flow** — docs_ai_access_private_link_card, docs_ai_access_live_status_pill, docs_ai_access_link_lifetime_selector, docs_ai_access_stop_ai_access, docs_ai_access_ephemeral_link [INFERRED 0.85]
- **Assistant Connector Onboarding Flow** — docs_ai_access_connect_assistant_card, docs_ai_access_assistant_tabs, docs_ai_access_mcp_connector_address, docs_ai_access_mcp_connector_pattern, docs_ai_access_link_url [EXTRACTED 1.00]
- **Local-first Trust Model** — docs_ai_access_privacy_by_design, docs_ai_access_local_first_architecture, docs_ai_access_128_bit_secret, docs_ai_access_cloudflare_tunnel, docs_ai_access_scoped_capability_gating [INFERRED 0.85]
- **Smart-home provider integrations (Smart Life, Home Assistant, Philips Hue, Apple Home)** — docs_connections_smart_life, docs_connections_home_assistant, docs_connections_philips_hue, docs_connections_apple_home [EXTRACTED 1.00]
- **Editor screen regions (sidebar, plan canvas, 3D preview, connections panel)** — docs_connections_home_settings_sidebar, docs_connections_floor_plan_canvas, docs_connections_3d_preview, docs_connections_connections_panel [EXTRACTED 1.00]
- **Draft-then-commit editing flow (snap-to-grid edits, undo/redo, save & apply)** — docs_connections_snap_to_grid, docs_connections_undo_redo_history, docs_connections_save_and_apply [INFERRED 0.75]
- **Plan authoring and commit flow** — docs_editor_plan_canvas_2d, docs_editor_room_list, docs_editor_lights_list, docs_editor_home_inspector, docs_editor_save_and_apply [INFERRED 0.85]
- **Synchronized views of one floor plan** — docs_editor_plan_canvas_2d, docs_editor_3d_preview, docs_editor_room_list, docs_editor_lights_list, docs_editor_status_bar [INFERRED 0.85]
- **One Panel, Three Depths: Home Overview, AC Sheet, Light Sheet** — docs_hero_home_panel, docs_hero_air_conditioner_sheet, docs_hero_light_sheet, docs_hero_room_sheet_header, docs_hero_power_button [EXTRACTED 0.95]
- **Air Conditioner Control Flow** — docs_hero_air_conditioner_sheet, docs_hero_power_button, docs_hero_temperature_slider, docs_hero_eco_mode_toggle, docs_hero_ac_option_tiles [EXTRACTED 0.95]
- **Light Brightness, White and Colour Control Flow** — docs_hero_light_sheet, docs_hero_brightness_slider, docs_hero_colour_temperature_slider, docs_hero_colour_palette, docs_hero_colour_swatches [EXTRACTED 0.95]
- **House Control Icon Visual Composition** — docs_icon_app_icon, docs_icon_house_glyph, docs_icon_gradient_background, docs_icon_amber_window [INFERRED 0.85]
- **Whole-Home Control Flow (status header, scene presets, room filters, device cards, 3D scene)** — docs_iphone_status_header, docs_iphone_scene_presets, docs_iphone_room_filter_chips, docs_iphone_lighting_control_cards, docs_iphone_floor_plan_3d_scene [EXTRACTED 1.00]
- **Shared Device Detail Pattern (AC and TV backlight screens)** — docs_iphone_living_ac_detail_screen, docs_iphone_temperature_slider, docs_iphone_tv_backlight_detail_screen, docs_iphone_brightness_slider, docs_iphone_colour_picker, docs_iphone_ac_feature_dials [INFERRED 0.95]
- **Home Provisioning: floor plan import, Mac pairing, Smart Life account, simulated devices** — docs_iphone_home_switcher, docs_iphone_import_floor_plan, docs_iphone_mac_pairing, docs_iphone_smart_life_integration, docs_iphone_simulated_devices [EXTRACTED 1.00]
- **Device Control Cards in the Home Dashboard Grid** — docs_island_living_ac_card, docs_island_bedroom_ac_card, docs_island_ceiling_card, docs_island_floor_lamp_card, docs_island_tv_backlight_card, docs_island_pendant_card, docs_island_spots_card, docs_island_counter_light_card [EXTRACTED 1.00]
- **Climate Control Flow (scene -> setpoint -> active state)** — docs_island_cozy_scene, docs_island_living_ac_card, docs_island_bedroom_ac_card, docs_island_temperature_stepper, docs_island_active_state_glow [INFERRED 0.85]
- **Lighting Control Flow (room-attributed dimmable light cards)** — docs_island_floor_lamp_card, docs_island_tv_backlight_card, docs_island_pendant_card, docs_island_counter_light_card, docs_island_dimming_level_bar, docs_island_room_label [INFERRED 0.85]
- **Studio Control Screen Composition** — docs_studio_screenshot, docs_studio_room_header, docs_studio_isometric_room_render, docs_studio_scene_presets, docs_studio_room_tabs, docs_studio_device_list [EXTRACTED 1.00]
- **Device Control Affordances** — docs_studio_ac_climate_card, docs_studio_temperature_stepper, docs_studio_brightness_slider, docs_studio_power_toggles [INFERRED 0.85]
- **Room Navigation and Status Orientation** — docs_studio_room_header, docs_studio_room_tabs, docs_studio_room_device_badge, docs_studio_whole_home_controls [INFERRED 0.75]
- **Home Widget Composition** — docs_widgets_png_home_widget, docs_widgets_png_isometric_floor_model, docs_widgets_png_climate_strip, docs_widgets_png_scene_presets, docs_widgets_png_room_status_rows, docs_widgets_png_active_scene_highlight [EXTRACTED 1.00]
- **Shared Dark Glass Widget Design Language** — docs_widgets_png_home_widget, docs_widgets_png_scenes_widget, docs_widgets_png_climate_widget, docs_widgets_png_room_widget, docs_widgets_png_light_widget, docs_widgets_png_dark_glass_style [INFERRED 0.85]
- **Room Control Flow** — docs_widgets_png_room_widget, docs_widgets_png_room_status_rows, docs_widgets_png_all_off_control, docs_widgets_png_light_widget [INFERRED 0.75]
- **House Glyph Composition (Roof, Chimney, Window)** — ios_resources_assets_xcassets_appicon_appiconset_icon_1024_house_glyph, ios_resources_assets_xcassets_appicon_appiconset_icon_1024_roof_peak, ios_resources_assets_xcassets_appicon_appiconset_icon_1024_chimney, ios_resources_assets_xcassets_appicon_appiconset_icon_1024_window_cutout [EXTRACTED 1.00]
- **Warm Home Visual Language (Gradient, Glow, Glyph, Brand)** — ios_resources_assets_xcassets_appicon_appiconset_icon_1024_gradient_background, ios_resources_assets_xcassets_appicon_appiconset_icon_1024_warm_glow, ios_resources_assets_xcassets_appicon_appiconset_icon_1024_house_glyph, ios_resources_assets_xcassets_appicon_appiconset_icon_1024_brand_identity [INFERRED 0.85]
- **House Control App Icon Composition** — ios_resources_assets_xcassets_appiconpreview_imageset_icon, ios_resources_assets_xcassets_appiconpreview_imageset_icon_house_glyph, ios_resources_assets_xcassets_appiconpreview_imageset_icon_gradient_background, ios_resources_assets_xcassets_appiconpreview_imageset_icon_glow_aura, ios_resources_assets_xcassets_appiconpreview_imageset_icon_brand_identity [INFERRED 0.85]

## Communities (131 total, 26 thin omitted)

### Community 0 - "HouseCore Agent Gateway"
Cohesion: 0.05
Nodes (23): AgentActivity, .json, AgentBackend, AgentGateway, .linkURL, .mcpURL, AgentPermissions, .json (+15 more)

### Community 1 - "HouseCore Plan Editor"
Cohesion: 0.05
Nodes (19): AppKit, DeviceRef, Item, PlanEditor, .allIds, .items, .name, .rooms (+11 more)

### Community 2 - "Web UI Panel"
Cohesion: 0.09
Nodes (48): haptic(), isPhone, pending, platform, FLOOR_FILL, KEYS, REGIONS, slug() (+40 more)

### Community 3 - "iOS Settings View"
Cohesion: 0.10
Nodes (35): .discovery, .manual, .body, SettingsView, .aboutSection, .connectionsSection, .customPlanDetail, .homeKitDetail (+27 more)

### Community 4 - "HouseCore Device Hub"
Cohesion: 0.10
Nodes (12): DeviceHub, .canPoll, .connectedCloud, .hasLinks, .isConnected, .linkedDeviceCount, .services, .servicesInfo (+4 more)

### Community 5 - "Web Editor Connections"
Cohesion: 0.12
Nodes (45): bootConsole(), ago(), codeBlock(), copy(), copyButton(), flash(), left(), render() (+37 more)

### Community 6 - "Web Editor Editor"
Cohesion: 0.12
Nodes (47): bootEditor(), add(), bind(), bounds(), buildPhoneLayout(), close(), closeModals(), closeSheet() (+39 more)

### Community 7 - "iOS Devices View"
Cohesion: 0.10
Nodes (22): AddDevicesView, .body, .candidates, DeviceCatalog, DevicePicker, .body, .candidates, DevicesView (+14 more)

### Community 8 - "SmartLife Cloud Service"
Cohesion: 0.12
Nodes (8): DeviceCloud, Failure, .errorDescription, Session, SmartLifeService, .isConfigured, .publicInfo, Transport

### Community 9 - "HouseCore HomeKit Service"
Cohesion: 0.08
Nodes (7): HomeKitService, .authorized, .info, .isConnected, .isDenied, .isEnabled, HomeKit

### Community 10 - "macOS App Delegate"
Cohesion: 0.11
Nodes (4): AppDelegate, .computerName, .islandEnabled, .smartLife

### Community 11 - "iOS Pairing View"
Cohesion: 0.08
Nodes (16): AVFoundation, CameraState, denied, ready, unavailable, unknown, CodeScanner, Coordinator (+8 more)

### Community 12 - "Widgets House Model"
Cohesion: 0.16
Nodes (11): HouseModel, .body, IsoProjection, .squash, Polygon, Solid, .depth, .id (+3 more)

### Community 13 - "HouseCore Home Assistant Service"
Cohesion: 0.14
Nodes (7): FanNames, Call, Config, HomeAssistantService, .info, .isConnected, .shareable

### Community 14 - "Widgets Style"
Cohesion: 0.07
Nodes (29): .body, .body, Caption, .body, EnvironmentValues, .stillFamily, .stillRenderingMode, HomeSnapshot (+21 more)

### Community 15 - "SmartLife Tuya Service"
Cohesion: 0.15
Nodes (8): Credentials, Failure, .errorDescription, InfraredKey, TuyaMapper, TuyaService, .isConfigured, .publicInfo

### Community 16 - "Widgets Components"
Cohesion: 0.13
Nodes (21): AllLightsButton, ClimateButtons, .body, ClimateDial, .body, ClimateLine, .body, HomeTitle (+13 more)

### Community 17 - "HouseCore Hue Service"
Cohesion: 0.15
Nodes (8): BridgeTrust, ButtonNotPressed, .errorDescription, Config, HueService, .info, .isConnected, .shareable

### Community 18 - "Widgets Device Widgets"
Cohesion: 0.10
Nodes (21): ClimateWidgetView, .body, .family, EmptyHome, .body, RoomClimate, .body, RoomWidgetView (+13 more)

### Community 19 - "Web App Entrypoint"
Cohesion: 0.10
Nodes (28): three, CLIENT_COLORS, clientColor(), fakeNative(), TABS, incoming, isNative, post() (+20 more)

### Community 20 - "HouseCore Home Snapshot"
Cohesion: 0.17
Nodes (17): AC, DeviceChange, .message, Furniture, HomeSnapshot, .acsOn, .identity, .isSimulated (+9 more)

### Community 21 - "iOS Home Web"
Cohesion: 0.08
Nodes (6): .currentPlan, HomeWeb, .assetRoot, .webView, HomeWebView, OSLog

### Community 22 - "Web Agent Plan Edit"
Cohesion: 0.15
Nodes (30): AC_KEYS, applyOperations(), check(), checkRect(), cleanFurniture(), fail(), findById(), FURNITURE_GUIDE (+22 more)

### Community 23 - "Widgets Widget Main"
Cohesion: 0.09
Nodes (23): AppIntents, WidgetKit, render(), Still, WidgetFamily, .name, ClimateWidget, .body (+15 more)

### Community 24 - "Web App Store"
Cohesion: 0.12
Nodes (27): vitest, loadSceneIntoPreview(), AC_FANS, AC_MODES, AC_SWINGS, applyTo(), KIND_MAP, lightPatch() (+19 more)

### Community 25 - "HouseCore HomeKit Mapper"
Cohesion: 0.13
Nodes (9): ColorMath, HomeKitMapper, Kind, .device, heaterCooler, light, outlet, sensor (+1 more)

### Community 26 - "HouseCore Sync Client"
Cohesion: 0.11
Nodes (9): Status, connected, connecting, failed, searching, unpaired, SyncClient, .isConnected (+1 more)

### Community 27 - "HouseCore Secret Store"
Cohesion: 0.13
Nodes (9): FileSecretStore, .stamp, KeychainSecretStore, .query, .stamp, MemorySecretStore, .stamp, SecretStore (+1 more)

### Community 28 - "HouseCore Shared Home"
Cohesion: 0.18
Nodes (6): Queued, SharedHome, .hasPendingActions, .lockURL, .queueURL, .snapshotURL

### Community 29 - "HouseCore Device Service"
Cohesion: 0.13
Nodes (11): DeviceKind, ac, light, sensor, DeviceReading, DeviceService, .controlsDevices, Dictionary (+3 more)

### Community 30 - "iOS Connection Views"
Cohesion: 0.14
Nodes (18): ConnectionLook, EnvironmentValues, Field, token, url, Footnote, .body, HomeAssistantView (+10 more)

### Community 31 - "macOS Cloudflare Tunnel"
Cohesion: 0.11
Nodes (12): CloudflareTunnel, .binary, .bundledBinary, .pidFile, .state, State, failed, live (+4 more)

### Community 32 - "Widgets Controls"
Cohesion: 0.17
Nodes (15): AllLightsControl, .body, ClimateControl, .body, ClimateControlConfiguration, LightControl, .body, LightControlConfiguration (+7 more)

### Community 33 - "macOS Web Host"
Cohesion: 0.12
Nodes (3): FirstMouseWebView, WebHost, .assetRoot

### Community 34 - "Device Lab Hue"
Cohesion: 0.09
Nodes (22): AUTO, bedroom, bridge, bridgeDevice, certFile, dir, emit(), here (+14 more)

### Community 35 - "Widgets Intents"
Cohesion: 0.17
Nodes (12): LightWidgetView, .body, .family, ACPowerIntent, ACStepIntent, AllLightsIntent, ApplySceneIntent, ClimateConfiguration (+4 more)

### Community 36 - "HouseCore Web Assets"
Cohesion: 0.10
Nodes (5): AssetSchemeHandler, WebJSON, AppDelegate, EditorController, WebKit

### Community 37 - "iOS App Model"
Cohesion: 0.10
Nodes (12): AppModel, .hasAnyConnection, .homeAssistantInfo, .hueInfo, .smartLife, .smartLifeUserCode, .syncedRevision, WelcomeChoice (+4 more)

### Community 38 - "macOS Panel Controller"
Cohesion: 0.13
Nodes (4): FloatingPanel, .canBecomeKey, .canBecomeMain, PanelController

### Community 39 - "Widgets Providers"
Cohesion: 0.16
Nodes (6): Entry, configured(), ConfiguredEntry, ConfiguredProvider, HomeEntry, HomeProvider

### Community 40 - "HouseCore Service Discovery"
Cohesion: 0.11
Nodes (7): About, QueueBox, tuyaCode(), CryptoKit, dnssd, Foundation, Network

### Community 41 - "HouseCore Plan Store"
Cohesion: 0.20
Nodes (6): PlanStore, .customPlanName, .customPlanRevision, .customPlanURL, .hasCustomPlan, .settingsURL

### Community 43 - "128-Bit Link Secret"
Cohesion: 0.14
Nodes (21): 128-bit Link Secret, Your 3D Home Toggle, Access Mode Segmented Control (Over the internet / This Mac only), Live Activity Feed, AI Access Screen, Assistant Preset Tabs (Any chat / Claude / ChatGPT / Code & agents), What It May Do Capability Panel, Cloudflare Tunnel Relay (+13 more)

### Community 44 - "Web Agent Tools"
Cohesion: 0.19
Nodes (21): clamp(), createAgent(), acState(), activateScene(), callTool(), describeChange(), errorResult(), guide() (+13 more)

### Community 45 - "HouseCore Linked Cloud"
Cohesion: 0.14
Nodes (4): EventLog, .fileURL, CommandRejection, LinkedCloud

### Community 46 - "iOS README"
Cohesion: 0.10
Nodes (21): Bonjour Types Must Be Declared, Release 1.0.0 (2026-10-15), Two iPhone Editions, render_home Tool, App Store Edition XcodeGen Spec, Declared Bonjour Service Types, HouseCore SwiftPM Package Dependency, HouseSmartLife Module Linkage (+13 more)

### Community 47 - "HouseCore Sync Server"
Cohesion: 0.16
Nodes (5): Peer, SyncServer, .connectedDevices, .isEnabled, .port

### Community 48 - "3D Isometric Floor Plan Render"
Cohesion: 0.17
Nodes (21): AC Feature Dials (Mode Cool, Fan Auto, Sleep Off, Airflow Swing), Brightness Slider (70%), Colour Picker with Hex Readout and Swatches (#FF7A3C), Eco Mode Toggle, 3D Isometric Floor Plan Render, Home Overview Screen, Home Switcher (Apartment / Studio demo homes), House Control iOS App (+13 more)

### Community 49 - "iOS SmartLife View"
Cohesion: 0.14
Nodes (9): Login, QRImage, .transferRepresentation, SmartLifeView, .body, .connected, .entry, Theme (+1 more)

### Community 50 - "macOS Island Controller"
Cohesion: 0.16
Nodes (5): IslandController, .bootInfo, IslandPanel, .canBecomeKey, .canBecomeMain

### Community 51 - "Widgets Controls (2)"
Cohesion: 0.13
Nodes (3): WidgetActions, .appBundleIdentifier, SetAllLightsIntent

### Community 52 - "iOS Root View"
Cohesion: 0.12
Nodes (11): HouseControlApp, .body, NewHomeView, BannerView, .body, RootView, .body, .body (+3 more)

### Community 53 - "SmartLife Platform Core"
Cohesion: 0.16
Nodes (9): SmartLifePlatform, .account, .active, .info, .isConnected, .isSmartLifeConnected, .smartLifeInfo, .tuyaInfo (+1 more)

### Community 54 - "Repo Service Tests"
Cohesion: 0.18
Nodes (4): FakeService, .info, .isConnected, ServiceTests

### Community 55 - "Connections Screen"
Cohesion: 0.14
Nodes (17): Apple Home / HomeKit Integration, One Home Mixing Four Platforms, Home Assistant Integration, HomeKit, Hue Trust-on-First-Use Certificate Pinning, Integration provider card pattern, Matter protocol, Philips Hue Integration (+9 more)

### Community 56 - "Widgets Screen"
Cohesion: 0.13
Nodes (19): Widget State Regression Fix, Push Event Subscriptions, 12-Second State Polling, Queued Action Expires After Ten Minutes, App Group home.json with flock, App Intent Tap Handling, Controls and Quick Actions, Darwin Notification Wake-Up (+11 more)

### Community 57 - "macOS Agent Controller"
Cohesion: 0.23
Nodes (3): AgentController, .autoStop, .isLive

### Community 58 - "AC Option Tiles"
Cohesion: 0.16
Nodes (19): House Control Hero Screenshot (panel, AC sheet, colour light sheet), Live 3D Floor Plan Viewport, AC Option Tiles (Mode Cool, Fan speed Auto, Sleep Off, Airflow Swing), Living AC Detail Sheet, Brightness Percentage Slider with Large "70 %" Readout, Hue/Saturation Colour Area with Hex Readout (#FF7A3C), Preset Colour Swatch Row, White-Temperature Slider (warm to cool, sun icons at both ends) (+11 more)

### Community 59 - "Active State Accent Glow"
Cohesion: 0.19
Nodes (17): Bedroom AC Climate Card (Idle, 24 degrees setpoint), Ceiling Light Card (Off, Living), Counter Light Card (On, Kitchen), Cozy Scene (Selected Preset), Device Control Card Pattern (icon, name, state line, inline control), Brightness Percentage with Progress Bar, Floor Lamp Card (On, Living), Home Control Dashboard (+9 more)

### Community 60 - "Arbitrum Logo"
Cohesion: 0.18
Nodes (18): Arbitrum Logo (white mark on #213147 disc), House Control App Icon (cream house glyph on purple tile, embedded PNG), Support House Control Banner (Dark Theme, 1280x360), Support House Control Banner (Light Theme, 1280x360), Base Logo (white square glyph on #0052FF disc), Bitcoin Logo (white B glyph on #F7931A disc), BNB Chain Logo (white Binance mark on #F0B90B disc), Ethereum Logo (white ether diamond on #627EEA disc) (+10 more)

### Community 61 - "iOS App Model (2)"
Cohesion: 0.11
Nodes (14): HomeKitStatus, denied, off, ready, waiting, PlanChoice, SettingsRoute, devices (+6 more)

### Community 62 - "iOS Quick Actions"
Cohesion: 0.13
Nodes (5): Haptics, QuickActionCenter, .handler, SceneDelegate, UIKit

### Community 64 - "Widgets Intents (2)"
Cohesion: 0.19
Nodes (7): SetLightIntent, LightEntity, .displayRepresentation, LightQuery, SceneEntity, .displayRepresentation, SceneQuery

### Community 65 - "iOS Quick Actions (2)"
Cohesion: 0.14
Nodes (10): Group, climate, home, lights, scenes, IconPreview, .body, QuickAction (+2 more)

### Community 66 - "HouseCore JSON Value"
Cohesion: 0.12
Nodes (9): JSONValue, .any, array, bool, .isNull, null, number, object (+1 more)

### Community 67 - "HouseCore Remote Catalog Service"
Cohesion: 0.17
Nodes (4): RemoteCatalogService, .controlsDevices, .info, .isConnected

### Community 68 - "HouseCore Sync Protocol"
Cohesion: 0.27
Nodes (3): SyncPairing, .link, SyncState

### Community 69 - "128-Bit Link Key"
Cohesion: 0.12
Nodes (16): 128-Bit Key in Every Path, Action Links (/do/…), Auto-Stop Timer, Cloudflare Quick Tunnel, cloudflared Developer ID Check, edit_floor_plan Tool, Loopback-Only Listener on Port 7419, MCP Server over Streamable HTTP (+8 more)

### Community 70 - "Activity Based Lighting Scenes"
Cohesion: 0.15
Nodes (13): Studio AC Climate Card, Ceiling Brightness Slider, Device List Grouped by Room, Isometric 3D Room Render, Light Device Cards, Power Toggle Controls, Room Device Count Badge, Room Header with Live Status Summary (+5 more)

### Community 71 - "Floor Plan Docs"
Cohesion: 0.17
Nodes (17): Changelog Section as Release Notes, Capture What the Preview Shows, Light Groups, Release 1.1.1 (2026-10-18), Full Scene Editing, linked:true Device ID Redaction, Air Conditioners Schema, Metre Coordinate System (x east, z south) (+9 more)

### Community 72 - "Web App Furniture"
Cohesion: 0.29
Nodes (14): builders, chair(), darker(), doorLines(), group(), legs(), seating(), buildHouse() (+6 more)

### Community 74 - "SmartLife Infrared Remote"
Cohesion: 0.21
Nodes (3): InfraredRemote, Rejection, SelfTest

### Community 75 - "2D Floor Plan Editing Canvas"
Cohesion: 0.24
Nodes (16): Isometric 3D preview with Lights on toggle, Air conditioners section, Building dimensions and outdoor temperature, Default camera azimuth and elevation, House Control Edit Home window, Light, strip and opening markers on the plan, Home global settings inspector, Import and Export plan controls (+8 more)

### Community 76 - "Web Package"
Cohesion: 0.12
Nodes (14): lucide, vite, dependencies, lucide, devDependencies, vite, vitest, name (+6 more)

### Community 77 - "HouseCore Home Snapshot (2)"
Cohesion: 0.19
Nodes (8): HomeAction, Kind, acPower, acTarget, allLights, light, room, scene

### Community 79 - "Device Lab HomeKit"
Cohesion: 0.23
Nodes (12): accessory(), airConditioner(), bridge, here, lamp(), livingAC, log(), plug() (+4 more)

### Community 80 - "Web App World"
Cohesion: 0.29
Nodes (13): buildFurniture(), createWorld(), basis(), fitDistance(), frame(), frameGoal(), resize(), screenAnchor() (+5 more)

### Community 81 - "2D Floor Plan Canvas"
Cohesion: 0.27
Nodes (12): Isometric 3D room preview with 'Lights on' toggle, Connections panel — 'Where your real lamps and air conditioners live', 2D floor plan canvas (Bedroom, Bathroom, Kitchen, Living, Dining), Home Settings sidebar (rooms, lights, air conditioners inventory), House Control — Edit Home (desktop editor screen), Light inventory (11 lights listed as room · mount), Light → room · mount binding notation, Room inventory (5 rooms with metric dimensions) (+4 more)

### Community 82 - "Active Scene Highlight"
Cohesion: 0.29
Nodes (12): Active Scene Highlight (Cozy lit in accent blue), All off Control in Room Header, Living AC Climate Strip (23°, cool, room 25.4°), Climate Widget (circular dial with set-point), Home Widget (3D house model, scenes and climate), Isometric 3D Floor Model with Glowing Lamps, Light Widget (TV backlight at 70%), Room Status Rows with On/Total Counts (+4 more)

### Community 83 - "macOS Agent Controller (2)"
Cohesion: 0.24
Nodes (6): .reach, AgentError, .errorDescription, Reach, internet, local

### Community 84 - "macOS Login Item"
Cohesion: 0.17
Nodes (9): LoginItem, .isInstalled, .isTemporaryCopy, .state, State, needsApproval, off, on (+1 more)

### Community 85 - "HouseCore Service Discovery (2)"
Cohesion: 0.33
Nodes (3): Found, .dictionary, ServiceDiscovery

### Community 87 - "iOS Editor Screen"
Cohesion: 0.20
Nodes (3): PlanFile, .filename, .readableContentTypes

### Community 88 - "Web App Config"
Cohesion: 0.33
Nodes (10): ConfigError, isPoint(), LIGHT_TYPES, loadConfig(), loadRawConfig(), need(), normalize(), groups() (+2 more)

### Community 89 - "Device Lab README"
Cohesion: 0.20
Nodes (9): Hardware-Free Lab for Connections, Home Assistant demo Integration, HTTP Server Port 8123, zeroconf Discovery Component, Lab Home Assistant, Lab HomeKit Bridge, Lab Hue Bridge Emulator, The Lab: Pretend Smart Homes (+1 more)

### Community 90 - "Device Lab Package"
Cohesion: 0.18
Nodes (10): hap-nodejs, dependencies, hap-nodejs, description, name, private, scripts, homekit (+2 more)

### Community 91 - "Web App Kit"
Cohesion: 0.29
Nodes (9): canvasTexture(), floorMaterial(), floorMaterials, FLOORS, materials, planks(), rng(), shade() (+1 more)

### Community 92 - "HouseCore QR Code"
Cohesion: 0.27
Nodes (3): QRCode, CoreImage, ImageIO

### Community 93 - "Camera Facing Walls Cut Away"
Cohesion: 0.24
Nodes (10): Open at Login, Release 0.1.0 (2026-10-14), Release 1.1.0 (2026-10-18), Camera-Facing Walls Cut Away, Visual Home Editor, Floor Plan as One JSON File (plan.json), House Control, The Island Around the Notch (+2 more)

### Community 96 - "Web App Lighting"
Cohesion: 0.27
Nodes (9): three, cyl(), fixtures, glowMaterial(), point(), spot(), STOPS, tempToColor() (+1 more)

### Community 97 - "Web Island Overlay"
Cohesion: 0.42
Nodes (9): bootIsland(), announce(), describe(), lightLabel(), mood(), setState(), update(), css() (+1 more)

### Community 98 - "Web App AC"
Cohesion: 0.22
Nodes (5): ACUnit, FAN_SPEED, MODE_COLORS, SWING_ANGLE, WALL_ROT

### Community 100 - "2008 Refusal Replay"
Cohesion: 0.25
Nodes (8): Per-Device Command Queue and Store Coalescing, Capability to Tuya Data Point Mapping, Tuya Error Codes 2001 / 2008 / 1109, Infrared AC as Tuya Virtual Remote, 2008 Refusal Replay, HOUSE_* Environment Variables, Known Limitations, Offline Self-Checks and --diagnose

### Community 101 - "Amber Window Cutout"
Cohesion: 0.36
Nodes (9): House Control App Icon (1024px), Warm Home Automation Brand Identity, Chimney Detail, Twilight Purple-to-Amber Gradient, House Silhouette Glyph, iOS App Icon Asset Slot, Rounded Chevron Roof, Interior Warm Glow (+1 more)

### Community 102 - "Repo Release"
Cohesion: 0.32
Nodes (7): Build Provenance Attestation Step, Draft Release Creation, SHA-Pinned GitHub Actions, Tag Matches MARKETING_VERSION Check, Release Workflow, Build Provenance Attestation, Mac Release Process: Tag to Draft Release

### Community 105 - "Widgets Make Sample"
Cohesion: 0.25
Nodes (4): config, snapshot, store, web

### Community 106 - "Widgets Intents (3)"
Cohesion: 0.43
Nodes (4): SetClimateIntent, ACEntity, .displayRepresentation, ACQuery

### Community 107 - "Device Lab Manifest"
Cohesion: 0.29
Nodes (6): codeowners, documentation, domain, iot_class, name, version

### Community 109 - "Widgets Intents (4)"
Cohesion: 0.29
Nodes (3): HomeData, .current, .orSample

### Community 111 - "Amber Square Window Accent"
Cohesion: 0.53
Nodes (6): Amber Square Window Accent, House Control App Icon, Deep Purple to Warm Amber Gradient Background, Cream House Glyph with Pitched Roof and Chimney, Rounded-Square App Icon Mask with Soft Drop Shadow, Warm, Inviting Smart-Home Brand Identity

### Community 112 - "App Icon Preview Imageset"
Cohesion: 0.53
Nodes (6): House Control App Icon Preview (3x), AppIconPreview Imageset (Universal, 3x), House Control Brand Identity, Warm Light Glow Aura Behind The House, Violet-To-Ambient-Amber Gradient Background, House Glyph (Outline With Chimney And Door)

### Community 114 - "Widgets Intents (5)"
Cohesion: 0.60
Nodes (3): RoomEntity, .displayRepresentation, RoomQuery

### Community 115 - "macOS Agent Controller (4)"
Cohesion: 0.40
Nodes (5): Phase, failed, live, off, starting

### Community 117 - "Device Lab Hue (2)"
Cohesion: 0.67
Nodes (4): add(), device(), light(), room()

### Community 118 - "Widgets Style (2)"
Cohesion: 0.50
Nodes (4): Accessory, circular, inline, rectangular

## Knowledge Gaps
- **292 isolated node(s):** `.json`, `.json`, `.linkURL`, `.mcpURL`, `.errorDescription` (+287 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 656 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **26 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AppModel` connect `iOS App Model` to `HouseCore Device Hub`, `HouseCore HomeKit Service`, `HouseCore Plan Store`, `iOS Sync Client`, `HouseCore Sync Tests`, `HouseCore Home Snapshot (2)`, `iOS App Model (3)`, `iOS SmartLife View`, `iOS Quick Actions (3)`, `iOS Root View`, `SmartLife Platform Core`, `HouseCore Widget Bridge`, `iOS Home Web`, `iOS Editor Screen`, `HouseCore Sync Client`, `iOS App Model (2)`, `iOS Haptics`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `AppModel` (e.g. with `HomeKitService` and `PlanStore`) actually correct?**
  _`AppModel` has 6 INFERRED edges - model-reasoned connections that need verification._
- **What connects `.json`, `.json`, `.linkURL` to the rest of the system?**
  _292 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `HouseCore Agent Gateway` be split into smaller, more focused modules?**
  _Cohesion score 0.05380333951762523 - nodes in this community are weakly interconnected._
- **Why does `HouseCore` connect `HouseCore Plan Editor` to `HouseCore Agent Gateway`, `iOS Devices View`, `iOS Pairing View`, `Widgets House Model`, `Widgets Style`, `Widgets Components`, `Widgets Device Widgets`, `iOS Home Web`, `Widgets Widget Main`, `iOS Connection Views`, `Widgets Controls`, `macOS Web Host`, `Widgets Intents`, `Widgets Providers`, `HouseCore Service Discovery`, `iOS SmartLife View`, `Widgets Controls (2)`, `iOS Root View`, `iOS App Model (2)`, `iOS Quick Actions`, `SmartLife Infrared Remote`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **Are the 5 inferred relationships involving `AppDelegate` (e.g. with `DeviceHub` and `PlanStore`) actually correct?**
  _`AppDelegate` has 5 INFERRED edges - model-reasoned connections that need verification._
- **Should `HouseCore Plan Editor` be split into smaller, more focused modules?**
  _Cohesion score 0.052289815447710185 - nodes in this community are weakly interconnected._