# Sanity Data Schema: geektion.com

## 1. Document: Product (`product`)
Used for eBikes and Drive Systems.

| Field | Type | Description |
| :--- | :--- | :--- |
| `title` | string | Product name (e.g., G-Series M80 Motor) |
| `slug` | slug | URL path |
| `category` | string | Enum: `ebike`, `drive-system`, `component` |
| `subCategory` | string | e.g., `MTB`, `City`, `Motor`, `Battery` |
| `description` | text | Marketing description |
| `technicalSpecs` | array | **Core B2B Data** (see below) |
| `gallery` | array | Images and 3D render URLs |
| `features` | array | Key selling points (e.g., "Silent Drive", "Fast Charge") |
| `downloads` | array | References to `file` (Manuals, CAD, STEP) |
| `compatibility` | array | References to other `product` (e.g., Motor fits which battery) |

### Object: Technical Specs (`techSpec`)
- `label`: string (e.g., "Max Torque")
- `value`: string (e.g., "85")
- `unit`: string (e.g., "Nm")
- `isHero`: boolean (Flag to show in product card preview)

## 2. Document: OEM Service (`oemService`)
Used for manufacturing pillars.

| Field | Type | Description |
| :--- | :--- | :--- |
| `title` | string | Service name (e.g., Aluminum Frame Forging) |
| `processSteps` | array | Step-by-step workflow (Object: Icon, Title, Detail) |
| `materials` | array | Supported materials (e.g., AL-6061, Toray T800) |
| `capabilities` | text | Machine list and annual capacity |
| `certification` | array | ISO, TUV, etc. |

## 3. Document: Partner/Case Study (`partnerCase`)
Building trust with B2B clients.

| Field | Type | Description |
| :--- | :--- | :--- |
| `brandName` | string | Client brand name |
| `logo` | image | Brand logo |
| `techUsed` | array | References to `product` provided to them |
| `projectSummary` | text | Brief on the collaboration |

## 4. Object: Global Settings (`siteSettings`)
- `b2bNotice`: string (Top bar announcement)
- `cataloguePdf`: file (Current year product lineup)
- `contactEmails`: array (Regional sales contacts)
