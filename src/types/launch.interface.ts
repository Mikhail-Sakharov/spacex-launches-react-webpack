import {DatePrecision} from './date-precision.enum'

export interface Failure {
  time: number,
  altitude: number,
  reason: string,
}

export interface Core {
  core: string | null,
  flight: number | null,
  gridfins: boolean | null,
  legs: boolean | null,
  reused: boolean | null,
  landing_attempt: boolean | null,
  landing_success: boolean | null,
  landing_type: string | null,
  landpad: string | null
}

export interface Launch {
  fairings: {
    reused: boolean | null,
    recovery_attempt: boolean | null,
    recovered: boolean | null,
    ships: string[]
  },
  links: {
    patch: {
        small: string | null,
        large: string | null
    },
    reddit: {
        campaign: string | null,
        launch: string | null,
        media: string | null,
        recovery: string | null
    },
    flickr: {
        small: string[],
        original: string[]
    },
    presskit: string | null,
    webcast: string | null,
    youtube_id: string | null,
    article: string | null,
    wikipedia: string | null
  },
  static_fire_date_utc: string | null,
  static_fire_date_unix: number | null,
  tdb: boolean,
  net: boolean,
  window: number | null,
  rocket: string | null,
  success: boolean | null,
  failures: Failure[],
  details: string | null,
  crew: string[],
  ships: string[],
  capsules: string[],
  payloads: string[],
  launchpad: string | null,
  auto_update: boolean,
  flight_number: number,
  name: string,
  date_utc: string,
  date_unix: number,
  date_local: string,
  date_precision: DatePrecision,
  upcoming: boolean,
  cores: Core[],
  id: string
}
