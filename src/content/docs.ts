import type { DocGuide } from '../types';

export const DOC_GUIDES: DocGuide[] = [
  {
    id: 'doc-flutter-sqlite',
    slug: 'flutter-offline-sqlite-architecture',
    title: 'Flutter Offline-First SQLite Architecture',
    section: 'Mobile Architecture',
    overview: 'A standardized blueprint for implementing reliable on-device SQLite persistence with reactive stream observation and automatic sync queues.',
    prerequisites: [
      'Flutter SDK 3.24+ installed and configured',
      'Dart 3.5+ with sound null safety',
      'sqflite and path packages added to pubspec.yaml',
    ],
    steps: [
      {
        title: 'Step 1: Declare Schema Contracts',
        instructions: 'Define strict column constants and schema migration versions to prevent runtime query errors and maintain forward schema compatibility.',
        language: 'dart',
        codeSnippet: `abstract class TelemetrySchema {
  static const String tableName = 'telemetry_entries';
  static const String colId = 'id';
  static const String colDeviceId = 'device_id';
  static const String colMoisture = 'moisture_percentage';
  static const String colTimestamp = 'created_at';
  static const String colSyncStatus = 'sync_status'; // 0 = pending, 1 = synced
}`
      },
      {
        title: 'Step 2: Initialize Database with Versioned Migrations',
        instructions: 'Open the database connection with an explicit version number and handle migrations deterministically.',
        language: 'dart',
        codeSnippet: `Future<Database> openLocalDatabase() async {
  final dbFolder = await getDatabasesPath();
  final fullPath = join(dbFolder, 'gprs_field.db');

  return openDatabase(
    fullPath,
    version: 1,
    onCreate: (db, version) async {
      await db.execute('''
        CREATE TABLE \${TelemetrySchema.tableName} (
          \${TelemetrySchema.colId} TEXT PRIMARY KEY,
          \${TelemetrySchema.colDeviceId} TEXT NOT NULL,
          \${TelemetrySchema.colMoisture} REAL NOT NULL,
          \${TelemetrySchema.colTimestamp} INTEGER NOT NULL,
          \${TelemetrySchema.colSyncStatus} INTEGER NOT NULL DEFAULT 0
        )
      ''');
    },
  );
}`
      },
      {
        title: 'Step 3: Repository Mutation with Stream Notification',
        instructions: 'Insert data into SQLite first, and notify stream listeners immediately so the UI updates with zero perceptible lag.',
        language: 'dart',
        codeSnippet: `Future<void> recordTelemetry(TelemetryModel model) async {
  final db = await openLocalDatabase();
  await db.insert(
    TelemetrySchema.tableName,
    model.toMap(),
    conflictAlgorithm: ConflictAlgorithm.replace,
  );
  // Trigger reactive stream update for active UI widgets
  _streamController.add(await getLatestReadings());
}`
      }
    ],
    troubleshooting: [
      {
        problem: 'DatabaseLockedException during high-throughput background sync',
        resolution: 'Ensure all write transactions use a single shared Database instance rather than opening multiple concurrent connections.'
      },
      {
        problem: 'Data loss during app force-close',
        resolution: 'Wrap multi-row inserts in explicit db.transaction() blocks to ensure ACID atomicity.'
      }
    ],
    version: '1.2.0',
    lastReviewed: 'February 2026',
    publishable: true,
  },
  {
    id: 'doc-blender-pipeline',
    slug: 'blender-to-after-effects-pipeline',
    title: 'Blender 3D to After Effects Production Pipeline',
    section: 'Creative Pipeline',
    overview: 'Production workflow guidelines for exporting 3D passes (Beauty, Cryptomatte, Depth, Ambient Occlusion) from Blender Cycles into Adobe After Effects for final compositing.',
    prerequisites: [
      'Blender 4.0+ with Cycles engine enabled',
      'Adobe After Effects 2024+ with OpenEXR plugin',
      'Color management set to ACEScg or AgX',
    ],
    steps: [
      {
        title: 'Step 1: Configure View Layers and AOVs',
        instructions: 'In Blender View Layer properties, enable Combined, Z-Depth, Vector, Cryptomatte (Object & Material), and Ambient Occlusion passes.',
        language: 'plaintext',
        codeSnippet: `View Layer Properties > Passes:
- Data: Z-Depth, Vector, Normal
- Cryptomatte: Object, Material
- Light: Diffuse (Direct/Indirect), Glossy (Direct/Indirect), Emission`
      },
      {
        title: 'Step 2: Multi-layer OpenEXR Export',
        instructions: 'Set output format to OpenEXR MultiLayer with ZIP (lossless) or DWAA compression (film scans) at 16-bit float.',
        language: 'plaintext',
        codeSnippet: `Output Properties:
- File Format: OpenEXR MultiLayer
- Color Depth: Float (Half) 16-bit
- Codec: ZIP or DWAA
- Color Management: AgX / Standard`
      },
      {
        title: 'Step 3: AE Compositing Setup',
        instructions: 'Import the EXR sequence into After Effects using Extractor or Cryptomatte effect to isolate foreground elements, apply camera lens blur using the Depth pass, and perform cinematic color grading.',
        language: 'plaintext',
        codeSnippet: `After Effects Workflow:
1. Apply effect "Cryptomatte" -> Pick character or prop mesh
2. Apply effect "Camera Lens Blur" -> Source layer: Depth pass
3. Add adjustment layer with Lumetri Color -> Warm tint + highlight glow`
      }
    ],
    troubleshooting: [
      {
        problem: 'Z-Depth pass appears solid white or solid black in After Effects',
        resolution: 'Normalize the Z-depth pass in Blender compositor using a Map Range node, or apply the AE Extractor effect and adjust Black/White point clipping.'
      }
    ],
    version: '2.0.1',
    lastReviewed: 'January 2026',
    publishable: true,
  },
  {
    id: 'doc-typescript-contracts',
    slug: 'type-safe-api-contracts',
    title: 'Type-Safe API Contracts with TypeScript',
    section: 'Web Engineering',
    overview: 'Best practices for establishing shared type definitions, schema validation with Zod, and typed API response envelopes between backend services and client frontends.',
    prerequisites: [
      'Node.js 20+ LTS',
      'TypeScript 5.4+ with verbatimModuleSyntax enabled',
    ],
    steps: [
      {
        title: 'Step 1: Standard API Response Envelope',
        instructions: 'Define generic response envelopes to ensure consistent error handling, metadata, and status codes across all endpoints.',
        language: 'typescript',
        codeSnippet: `export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
  };
  timestamp: string;
}`
      },
      {
        title: 'Step 2: Endpoint Request & Response Types',
        instructions: 'Keep domain payloads strictly defined with export type statements.',
        language: 'typescript',
        codeSnippet: `export interface InquirySubmissionPayload {
  name: string;
  email: string;
  projectType: 'mobile' | 'web' | 'animation' | 'integrated';
  budgetRange: string;
  message: string;
}

export type InquirySubmissionResponse = ApiResponse<{
  referenceId: string;
  estimatedFollowUpHours: number;
}>;`
      }
    ],
    troubleshooting: [
      {
        problem: 'TypeScript error TS1205: Re-exporting a type requires "export type"',
        resolution: 'Always use verbatim module syntax "export type { ... }" when re-exporting interfaces and type aliases.'
      }
    ],
    version: '1.0.0',
    lastReviewed: 'February 2026',
    publishable: true,
  }
];

export const getDocGuideBySlug = (slug: string): DocGuide | undefined => {
  return DOC_GUIDES.find((d) => d.slug === slug);
};
