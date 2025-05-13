import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSONString: { input: any; output: any; }
};

export type AcceptFriendRequestMutation = {
  __typename?: 'AcceptFriendRequestMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** An enumeration. */
export const ActivityEnum = {
  Gym: 'GYM',
  Hiking: 'HIKING',
  Running: 'RUNNING',
  Soccer: 'SOCCER',
  Tennis: 'TENNIS'
} as const;

export type ActivityEnum = typeof ActivityEnum[keyof typeof ActivityEnum];
export type ActivityType = {
  __typename?: 'ActivityType';
  id?: Maybe<Scalars['String']['output']>;
};

export type AddEventMutation = {
  __typename?: 'AddEventMutation';
  event?: Maybe<EventType>;
};

export type AlterEventLocation = {
  __typename?: 'AlterEventLocation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type AlterEventMutation = {
  __typename?: 'AlterEventMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type AttachmentType = {
  __typename?: 'AttachmentType';
  id?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type BaseNotificationType = {
  id?: Maybe<Scalars['Int']['output']>;
  notificationType?: Maybe<NotificationEnum>;
  time?: Maybe<Scalars['DateTime']['output']>;
};

export type BasicInfoMutation = {
  __typename?: 'BasicInfoMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CancelFriendRequestMutation = {
  __typename?: 'CancelFriendRequestMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ChatMemberType = {
  __typename?: 'ChatMemberType';
  lastOpen?: Maybe<Scalars['DateTime']['output']>;
  nickname: Scalars['String']['output'];
  notifications?: Maybe<Scalars['String']['output']>;
  user: UserType;
};

export type ChatMessageType = {
  __typename?: 'ChatMessageType';
  attachmentUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  textContent: Scalars['String']['output'];
  timeSent: Scalars['DateTime']['output'];
  user: UserType;
};

/** An enumeration. */
export const ChatNotifications = {
  All: 'ALL',
  MentionsOnly: 'MENTIONS_ONLY',
  None: 'NONE'
} as const;

export type ChatNotifications = typeof ChatNotifications[keyof typeof ChatNotifications];
export type ChatType = {
  __typename?: 'ChatType';
  id?: Maybe<Scalars['Int']['output']>;
  members: Array<ChatMemberType>;
  messages: Array<ChatMessageType>;
  notifications?: Maybe<ChatNotifications>;
  timeCreated: Scalars['DateTime']['output'];
};

export type CommentOnPostMutation = {
  __typename?: 'CommentOnPostMutation';
  comment?: Maybe<PostCommentType>;
};

export type ConfirmMemberParticipationMutation = {
  __typename?: 'ConfirmMemberParticipationMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** An enumeration. */
export const CountryCode = {
  Ad: 'AD',
  Ae: 'AE',
  Af: 'AF',
  Ag: 'AG',
  Ai: 'AI',
  Al: 'AL',
  Am: 'AM',
  Ao: 'AO',
  Aq: 'AQ',
  Ar: 'AR',
  As: 'AS',
  At: 'AT',
  Au: 'AU',
  Aw: 'AW',
  Az: 'AZ',
  Ba: 'BA',
  Bb: 'BB',
  Bd: 'BD',
  Be: 'BE',
  Bf: 'BF',
  Bg: 'BG',
  Bh: 'BH',
  Bi: 'BI',
  Bj: 'BJ',
  Bm: 'BM',
  Bn: 'BN',
  Bo: 'BO',
  Br: 'BR',
  Bs: 'BS',
  Bt: 'BT',
  Bw: 'BW',
  By: 'BY',
  Bz: 'BZ',
  Ca: 'CA',
  Cd: 'CD',
  Cf: 'CF',
  Cg: 'CG',
  Ch: 'CH',
  Ci: 'CI',
  Ck: 'CK',
  Cl: 'CL',
  Cm: 'CM',
  Cn: 'CN',
  Co: 'CO',
  Cr: 'CR',
  Cu: 'CU',
  Cv: 'CV',
  Cy: 'CY',
  Cz: 'CZ',
  De: 'DE',
  Dj: 'DJ',
  Dk: 'DK',
  Dm: 'DM',
  Do: 'DO',
  Dz: 'DZ',
  Ec: 'EC',
  Ee: 'EE',
  Eg: 'EG',
  Er: 'ER',
  Es: 'ES',
  Et: 'ET',
  Fi: 'FI',
  Fj: 'FJ',
  Fm: 'FM',
  Fr: 'FR',
  Ga: 'GA',
  Gb: 'GB',
  Gd: 'GD',
  Ge: 'GE',
  Gh: 'GH',
  Gm: 'GM',
  Gn: 'GN',
  Gq: 'GQ',
  Gr: 'GR',
  Gt: 'GT',
  Gw: 'GW',
  Gy: 'GY',
  Hn: 'HN',
  Hr: 'HR',
  Ht: 'HT',
  Hu: 'HU',
  Id: 'ID',
  Ie: 'IE',
  Il: 'IL',
  In: 'IN',
  Io: 'IO',
  Iq: 'IQ',
  Ir: 'IR',
  Is: 'IS',
  It: 'IT',
  Jm: 'JM',
  Jo: 'JO',
  Jp: 'JP',
  Ke: 'KE',
  Kg: 'KG',
  Kh: 'KH',
  Ki: 'KI',
  Km: 'KM',
  Kn: 'KN',
  Kp: 'KP',
  Kr: 'KR',
  Kw: 'KW',
  Ky: 'KY',
  Kz: 'KZ',
  La: 'LA',
  Lb: 'LB',
  Lc: 'LC',
  Li: 'LI',
  Lk: 'LK',
  Lr: 'LR',
  Ls: 'LS',
  Lt: 'LT',
  Lu: 'LU',
  Lv: 'LV',
  Ly: 'LY',
  Ma: 'MA',
  Mc: 'MC',
  Md: 'MD',
  Me: 'ME',
  Mg: 'MG',
  Mh: 'MH',
  Mk: 'MK',
  Ml: 'ML',
  Mm: 'MM',
  Mn: 'MN',
  Mr: 'MR',
  Mt: 'MT',
  Mu: 'MU',
  Mv: 'MV',
  Mw: 'MW',
  Mx: 'MX',
  My: 'MY',
  Mz: 'MZ',
  Na: 'NA',
  Ne: 'NE',
  Ng: 'NG',
  Ni: 'NI',
  Nl: 'NL',
  No: 'NO',
  Np: 'NP',
  Nr: 'NR',
  Nz: 'NZ',
  Om: 'OM',
  Pa: 'PA',
  Pe: 'PE',
  Pg: 'PG',
  Ph: 'PH',
  Pk: 'PK',
  Pl: 'PL',
  Ps: 'PS',
  Pt: 'PT',
  Pw: 'PW',
  Py: 'PY',
  Qa: 'QA',
  Ro: 'RO',
  Rs: 'RS',
  Ru: 'RU',
  Rw: 'RW',
  Sa: 'SA',
  Sb: 'SB',
  Sc: 'SC',
  Sd: 'SD',
  Se: 'SE',
  Sg: 'SG',
  Si: 'SI',
  Sk: 'SK',
  Sl: 'SL',
  Sm: 'SM',
  Sn: 'SN',
  So: 'SO',
  Sr: 'SR',
  Ss: 'SS',
  St: 'ST',
  Sv: 'SV',
  Sy: 'SY',
  Sz: 'SZ',
  Td: 'TD',
  Tg: 'TG',
  Th: 'TH',
  Tj: 'TJ',
  Tl: 'TL',
  Tm: 'TM',
  Tn: 'TN',
  To: 'TO',
  Tr: 'TR',
  Tt: 'TT',
  Tv: 'TV',
  Tw: 'TW',
  Tz: 'TZ',
  Ua: 'UA',
  Ug: 'UG',
  Us: 'US',
  Uy: 'UY',
  Uz: 'UZ',
  Vc: 'VC',
  Ve: 'VE',
  Vn: 'VN',
  Vu: 'VU',
  Ws: 'WS',
  Ye: 'YE',
  Za: 'ZA',
  Zm: 'ZM',
  Zw: 'ZW'
} as const;

export type CountryCode = typeof CountryCode[keyof typeof CountryCode];
export type CreatePostMutation = {
  __typename?: 'CreatePostMutation';
  post?: Maybe<CreatePostType>;
};

export type CreatePostType = {
  __typename?: 'CreatePostType';
  comments?: Maybe<Array<Maybe<PostCommentType>>>;
  content: Scalars['String']['output'];
  event?: Maybe<EventType>;
  id?: Maybe<Scalars['Int']['output']>;
  imageUploadUrl?: Maybe<Scalars['String']['output']>;
  likedBy: Array<UserType>;
  likes?: Maybe<Scalars['Int']['output']>;
  timePosted: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
};


export type CreatePostTypeCommentsArgs = {
  end?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type DeleteAccountMutation = {
  __typename?: 'DeleteAccountMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteEventMutation = {
  __typename?: 'DeleteEventMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type EventCommentType = {
  __typename?: 'EventCommentType';
  comment?: Maybe<Scalars['String']['output']>;
  member?: Maybe<EventMemberType>;
};

export type EventMemberType = {
  __typename?: 'EventMemberType';
  comment?: Maybe<Scalars['String']['output']>;
  hasParticipated?: Maybe<Scalars['Boolean']['output']>;
  participates: Scalars['Boolean']['output'];
  role?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['String']['output']>;
  user: UserType;
};

export type EventNotificationType = BaseNotificationType & {
  __typename?: 'EventNotificationType';
  event?: Maybe<EventType>;
  id?: Maybe<Scalars['Int']['output']>;
  notificationType?: Maybe<NotificationEnum>;
  time?: Maybe<Scalars['DateTime']['output']>;
};

/** An enumeration. */
export const EventRating = {
  Bad: 'BAD',
  Good: 'GOOD',
  Great: 'GREAT',
  Neutral: 'NEUTRAL',
  VeryBad: 'VERY_BAD'
} as const;

export type EventRating = typeof EventRating[keyof typeof EventRating];
export type EventType = {
  __typename?: 'EventType';
  acceptedGenders?: Maybe<Scalars['JSONString']['output']>;
  activity: ActivityType;
  allowSpectators: Scalars['Boolean']['output'];
  averageScore?: Maybe<Scalars['Float']['output']>;
  chat?: Maybe<ChatType>;
  comments?: Maybe<Array<Maybe<EventCommentType>>>;
  description?: Maybe<Scalars['String']['output']>;
  endTime: Scalars['DateTime']['output'];
  finished: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  location: LocationType;
  maxAge?: Maybe<Scalars['Int']['output']>;
  maxParticipants?: Maybe<Scalars['Int']['output']>;
  members: Array<EventMemberType>;
  minAge?: Maybe<Scalars['Int']['output']>;
  moderators?: Maybe<Array<Maybe<EventMemberType>>>;
  organizer?: Maybe<EventMemberType>;
  participants?: Maybe<Array<Maybe<EventMemberType>>>;
  posts: Array<PostType>;
  requirements?: Maybe<Scalars['JSONString']['output']>;
  role?: Maybe<MemberRole>;
  skillLevel?: Maybe<Scalars['String']['output']>;
  spectators?: Maybe<Array<Maybe<EventMemberType>>>;
  startTime: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
};

export type FinishEventMutation = {
  __typename?: 'FinishEventMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** An enumeration. */
export const FormedRelationshipsType = {
  Acquaintances: 'ACQUAINTANCES',
  Friends: 'FRIENDS',
  RomanticRelationships: 'ROMANTIC_RELATIONSHIPS'
} as const;

export type FormedRelationshipsType = typeof FormedRelationshipsType[keyof typeof FormedRelationshipsType];
/** An enumeration. */
export const FrequencyOfPhycicalActivity = {
  Daily: 'DAILY',
  FewTimesAWeek: 'FEW_TIMES_A_WEEK',
  Occasionally: 'OCCASIONALLY',
  OnceAWeek: 'ONCE_A_WEEK',
  Rarely: 'RARELY'
} as const;

export type FrequencyOfPhycicalActivity = typeof FrequencyOfPhycicalActivity[keyof typeof FrequencyOfPhycicalActivity];
/** An enumeration. */
export const Gender = {
  Female: 'FEMALE',
  Male: 'MALE',
  NonBinary: 'NON_BINARY',
  PreferNotToSay: 'PREFER_NOT_TO_SAY'
} as const;

export type Gender = typeof Gender[keyof typeof Gender];
export type JoinEventMutation = {
  __typename?: 'JoinEventMutation';
  eventMember?: Maybe<EventMemberType>;
};

export type KickEventMemberMutation = {
  __typename?: 'KickEventMemberMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type LeaveEventMutation = {
  __typename?: 'LeaveEventMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type LikeEventMemberMutation = {
  __typename?: 'LikeEventMemberMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type LikePostMutation = {
  __typename?: 'LikePostMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type LocationType = {
  __typename?: 'LocationType';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  name?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['Int']['output']>;
};

export type LoginMutation = {
  __typename?: 'LoginMutation';
  myProfile?: Maybe<ProfileType>;
};

export type LogoutMutation = {
  __typename?: 'LogoutMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** An enumeration. */
export const MainAppUserGenderChoices = {
  /** MALE */
  A_0: 'A_0',
  /** FEMALE */
  A_1: 'A_1',
  /** NON_BINARY */
  A_2: 'A_2',
  /** PREFER_NOT_TO_SAY */
  A_3: 'A_3'
} as const;

export type MainAppUserGenderChoices = typeof MainAppUserGenderChoices[keyof typeof MainAppUserGenderChoices];
/** An enumeration. */
export const MainInterest = {
  Fun: 'FUN',
  Socialize: 'SOCIALIZE',
  Sport: 'SPORT'
} as const;

export type MainInterest = typeof MainInterest[keyof typeof MainInterest];
/** An enumeration. */
export const MatchedParticipationLikelihood = {
  Likely: 'LIKELY',
  Neutral: 'NEUTRAL',
  Unlikely: 'UNLIKELY',
  VeryLikely: 'VERY_LIKELY',
  VeryUnlikely: 'VERY_UNLIKELY'
} as const;

export type MatchedParticipationLikelihood = typeof MatchedParticipationLikelihood[keyof typeof MatchedParticipationLikelihood];
/** An enumeration. */
export const MemberRole = {
  Moderator: 'MODERATOR',
  Organizer: 'ORGANIZER',
  Participant: 'PARTICIPANT',
  Spectator: 'SPECTATOR'
} as const;

export type MemberRole = typeof MemberRole[keyof typeof MemberRole];
export type Mutations = {
  __typename?: 'Mutations';
  acceptFriendRequest?: Maybe<AcceptFriendRequestMutation>;
  addEvent?: Maybe<AddEventMutation>;
  alterEvent?: Maybe<AlterEventMutation>;
  alterEventLocation?: Maybe<AlterEventLocation>;
  cancelFriendRequest?: Maybe<CancelFriendRequestMutation>;
  commentOnPost?: Maybe<CommentOnPostMutation>;
  confirmMemberParticipation?: Maybe<ConfirmMemberParticipationMutation>;
  createPost?: Maybe<CreatePostMutation>;
  deleteAccount?: Maybe<DeleteAccountMutation>;
  deleteEvent?: Maybe<DeleteEventMutation>;
  finishEvent?: Maybe<FinishEventMutation>;
  joinEvent?: Maybe<JoinEventMutation>;
  kickEventMember?: Maybe<KickEventMemberMutation>;
  leaveEvent?: Maybe<LeaveEventMutation>;
  likeEventMember?: Maybe<LikeEventMemberMutation>;
  likePost?: Maybe<LikePostMutation>;
  login?: Maybe<LoginMutation>;
  logout?: Maybe<LogoutMutation>;
  rateEvent?: Maybe<RateEventMutation>;
  rejectFriendRequest?: Maybe<RejectFriendRequestMutation>;
  removeFriend?: Maybe<RemoveFriendMutation>;
  removePreferredActivity?: Maybe<RemovePreferredActivity>;
  replyOnPostComment?: Maybe<ReplyOnPostCommentMutation>;
  sendChatMessage?: Maybe<SendChatMessage>;
  sendConfirmationEmail?: Maybe<SendConfirmationEmailMutation>;
  sendFriendRequest?: Maybe<SendFriendRequestMutation>;
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmailMutation>;
  setChatNickname?: Maybe<SetChatNickname>;
  setChatNotifications?: Maybe<SetChatNotifications>;
  setEventLocation?: Maybe<SetEventLocation>;
  setPreferredActivity?: Maybe<SetPreferredActivity>;
  signup?: Maybe<SignupMutation>;
  spectateEvent?: Maybe<SpectateEventMutation>;
  submitBasicInfo?: Maybe<BasicInfoMutation>;
  submitSurvey?: Maybe<SubmitSurveyMutation>;
  unlikePost?: Maybe<UnlikePostMutation>;
  updateMaxTravelDistance?: Maybe<UpdateMaxTravelDistanceMutation>;
  updateProfileLocation?: Maybe<UpdateProfileLocation>;
};


export type MutationsAcceptFriendRequestArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationsAddEventArgs = {
  acceptedGenders?: InputMaybe<Array<InputMaybe<Gender>>>;
  activity: ActivityEnum;
  allowSpectators?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endTime: Scalars['DateTime']['input'];
  locationAddressLine1?: InputMaybe<Scalars['String']['input']>;
  locationAddressLine2?: InputMaybe<Scalars['String']['input']>;
  locationCountryCode?: InputMaybe<CountryCode>;
  locationId?: InputMaybe<Scalars['Int']['input']>;
  locationLatitude?: InputMaybe<Scalars['Float']['input']>;
  locationLongitude?: InputMaybe<Scalars['Float']['input']>;
  locationName?: InputMaybe<Scalars['String']['input']>;
  locationRegion?: InputMaybe<Scalars['String']['input']>;
  locationZipCode?: InputMaybe<Scalars['Int']['input']>;
  maxAge?: InputMaybe<Scalars['Int']['input']>;
  maxParticipants?: InputMaybe<Scalars['Int']['input']>;
  minAge?: InputMaybe<Scalars['Int']['input']>;
  requrements?: InputMaybe<Scalars['String']['input']>;
  skillLevel: SkillLevel;
  startTime: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
};


export type MutationsAlterEventArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  eventId: Scalars['Int']['input'];
  maxParticipants?: InputMaybe<Scalars['Int']['input']>;
  requrements?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsAlterEventLocationArgs = {
  eventId?: InputMaybe<Scalars['Int']['input']>;
  locationAddressLine1?: InputMaybe<Scalars['String']['input']>;
  locationAddressLine2?: InputMaybe<Scalars['String']['input']>;
  locationCountryCode?: InputMaybe<CountryCode>;
  locationLatitude?: InputMaybe<Scalars['Float']['input']>;
  locationLongitude?: InputMaybe<Scalars['Float']['input']>;
  locationName?: InputMaybe<Scalars['String']['input']>;
  locationRegion?: InputMaybe<Scalars['String']['input']>;
  locationZipCode?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationsCancelFriendRequestArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationsCommentOnPostArgs = {
  postId: Scalars['Int']['input'];
  text: Scalars['String']['input'];
};


export type MutationsConfirmMemberParticipationArgs = {
  eventId: Scalars['Int']['input'];
  participated: Scalars['Boolean']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationsCreatePostArgs = {
  content: Scalars['String']['input'];
  eventId: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};


export type MutationsDeleteEventArgs = {
  eventId: Scalars['Int']['input'];
};


export type MutationsFinishEventArgs = {
  eventId: Scalars['Int']['input'];
};


export type MutationsJoinEventArgs = {
  eventId: Scalars['Int']['input'];
};


export type MutationsKickEventMemberArgs = {
  eventId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationsLeaveEventArgs = {
  eventId: Scalars['Int']['input'];
};


export type MutationsLikeEventMemberArgs = {
  eventId: Scalars['Int']['input'];
  like: Scalars['Boolean']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationsLikePostArgs = {
  postId: Scalars['Int']['input'];
};


export type MutationsLoginArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsRateEventArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  eventId: Scalars['Int']['input'];
  score: EventRating;
};


export type MutationsRejectFriendRequestArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationsRemoveFriendArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationsRemovePreferredActivityArgs = {
  activity?: InputMaybe<ActivityEnum>;
};


export type MutationsReplyOnPostCommentArgs = {
  commentId: Scalars['Int']['input'];
  text: Scalars['String']['input'];
};


export type MutationsSendChatMessageArgs = {
  attachmentId?: InputMaybe<Scalars['String']['input']>;
  chatId: Scalars['Int']['input'];
  message: Scalars['String']['input'];
};


export type MutationsSendFriendRequestArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationsSetChatNicknameArgs = {
  chatId: Scalars['Int']['input'];
  nickname: Scalars['String']['input'];
};


export type MutationsSetChatNotificationsArgs = {
  chatId: Scalars['Int']['input'];
  notifications: ChatNotifications;
};


export type MutationsSetEventLocationArgs = {
  eventId?: InputMaybe<Scalars['Int']['input']>;
  locationId?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationsSetPreferredActivityArgs = {
  activity?: InputMaybe<ActivityEnum>;
  skillLevel?: InputMaybe<SkillLevel>;
};


export type MutationsSignupArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationsSpectateEventArgs = {
  eventId: Scalars['Int']['input'];
};


export type MutationsSubmitBasicInfoArgs = {
  bio?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsSubmitSurveyArgs = {
  formedRelationshipTypes: Array<InputMaybe<FormedRelationshipsType>>;
  frequencyOfPhysicalActivity: FrequencyOfPhycicalActivity;
  genderPreference: Array<InputMaybe<Gender>>;
  mainInterest: MainInterest;
  matchedParticipationLikelihood: MatchedParticipationLikelihood;
  physicalActivitySatisfaction: PhysicalActivitySatisfaction;
  preferredEventDuration: Scalars['Int']['input'];
  preferredPartnerCharacteristics: Array<InputMaybe<PreferredPartnerCharacteristics>>;
  preferredPartySize: PreferredPartySize;
  preferredTimeOfTheDay: Array<InputMaybe<TimeOfTheDay>>;
  socialInteractionImportance: SocialInteractionImportance;
};


export type MutationsUnlikePostArgs = {
  postId: Scalars['Int']['input'];
};


export type MutationsUpdateMaxTravelDistanceArgs = {
  distance?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationsUpdateProfileLocationArgs = {
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
};

/** An enumeration. */
export const NotificationEnum = {
  EventFinished: 'EVENT_FINISHED',
  FriendAccepted: 'FRIEND_ACCEPTED',
  FriendRequest: 'FRIEND_REQUEST'
} as const;

export type NotificationEnum = typeof NotificationEnum[keyof typeof NotificationEnum];
/** An enumeration. */
export const PhysicalActivitySatisfaction = {
  Dissatisfied: 'DISSATISFIED',
  Neutral: 'NEUTRAL',
  Satisfied: 'SATISFIED',
  VeryDissatisfied: 'VERY_DISSATISFIED',
  VerySatisfied: 'VERY_SATISFIED'
} as const;

export type PhysicalActivitySatisfaction = typeof PhysicalActivitySatisfaction[keyof typeof PhysicalActivitySatisfaction];
export type PostCommentType = {
  __typename?: 'PostCommentType';
  hasReplies?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isReplyTo?: Maybe<PostCommentType>;
  post: PostType;
  replies: Array<PostCommentType>;
  text: Scalars['String']['output'];
  timePosted: Scalars['DateTime']['output'];
  user: UserType;
};

export type PostType = {
  __typename?: 'PostType';
  comments?: Maybe<Array<Maybe<PostCommentType>>>;
  content: Scalars['String']['output'];
  event?: Maybe<EventType>;
  id?: Maybe<Scalars['Int']['output']>;
  likedBy: Array<UserType>;
  likes?: Maybe<Scalars['Int']['output']>;
  timePosted: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
};


export type PostTypeCommentsArgs = {
  end?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type PreferredActivityType = {
  __typename?: 'PreferredActivityType';
  activity: ActivityType;
  skillLevel?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export const PreferredPartnerCharacteristics = {
  Proximity: 'PROXIMITY',
  SameGender: 'SAME_GENDER',
  SimilarAge: 'SIMILAR_AGE',
  SimilarHealthGoals: 'SIMILAR_HEALTH_GOALS',
  SimilarHobbies: 'SIMILAR_HOBBIES',
  SimilarInterests: 'SIMILAR_INTERESTS',
  SimilarSkillLevel: 'SIMILAR_SKILL_LEVEL'
} as const;

export type PreferredPartnerCharacteristics = typeof PreferredPartnerCharacteristics[keyof typeof PreferredPartnerCharacteristics];
/** An enumeration. */
export const PreferredPartySize = {
  Alone: 'ALONE',
  LargeGroup: 'LARGE_GROUP',
  SmallGroup: 'SMALL_GROUP'
} as const;

export type PreferredPartySize = typeof PreferredPartySize[keyof typeof PreferredPartySize];
export type PrivacySettingType = {
  __typename?: 'PrivacySettingType';
  scope?: Maybe<Scalars['String']['output']>;
  setting?: Maybe<Scalars['String']['output']>;
};

export type ProfileType = {
  __typename?: 'ProfileType';
  bio: Scalars['String']['output'];
  chatmemberSet: Array<ChatMemberType>;
  chatmessageSet: Array<ChatMessageType>;
  dateJoined: Scalars['DateTime']['output'];
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  dislikes?: Maybe<Scalars['Int']['output']>;
  email: Scalars['String']['output'];
  eventmemberSet: Array<EventMemberType>;
  firstName: Scalars['String']['output'];
  formedRelationshipTypes?: Maybe<Scalars['JSONString']['output']>;
  frequencyOfPhysicalActivity?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  genderPreference?: Maybe<Scalars['JSONString']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean']['output'];
  isCapeable: Scalars['Boolean']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  likes?: Maybe<Scalars['Int']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  mainInterest?: Maybe<Scalars['String']['output']>;
  matchedParticipationLikelihood?: Maybe<Scalars['String']['output']>;
  maxTravelDistance?: Maybe<Scalars['Int']['output']>;
  password: Scalars['String']['output'];
  physicalActivitySatisfaction?: Maybe<Scalars['String']['output']>;
  preferredActivities: Array<PreferredActivityType>;
  preferredEventDuration?: Maybe<Scalars['Int']['output']>;
  preferredPartnerCharacteristics?: Maybe<Scalars['JSONString']['output']>;
  preferredPartySize?: Maybe<Scalars['String']['output']>;
  preferredTimeOfTheDay?: Maybe<Scalars['JSONString']['output']>;
  privacySettings: Array<PrivacySettingType>;
  socialInteractionImportance?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
  xp: Scalars['Int']['output'];
};

export type Queries = {
  __typename?: 'Queries';
  allActivities?: Maybe<Array<Maybe<ActivityType>>>;
  chat?: Maybe<ChatType>;
  countFriends?: Maybe<Scalars['Int']['output']>;
  countRequestsPending?: Maybe<Scalars['Int']['output']>;
  countRequestsSent?: Maybe<Scalars['Int']['output']>;
  emailTaken: Scalars['Boolean']['output'];
  event?: Maybe<EventType>;
  eventPictureGcloudUrl?: Maybe<Scalars['String']['output']>;
  eventPosts?: Maybe<Array<Maybe<PostType>>>;
  friends?: Maybe<Array<Maybe<RelationshipType>>>;
  futureJoinedEvents?: Maybe<Array<Maybe<EventType>>>;
  globalPosts?: Maybe<Array<Maybe<PostType>>>;
  isLoggedIn?: Maybe<Scalars['Boolean']['output']>;
  joinedEvents?: Maybe<Array<Maybe<EventType>>>;
  myChats?: Maybe<Array<Maybe<ChatType>>>;
  myNotifications?: Maybe<Array<Maybe<BaseNotificationType>>>;
  myProfile?: Maybe<ProfileType>;
  myRecommendedEvents?: Maybe<Array<Maybe<EventType>>>;
  newAttachment?: Maybe<AttachmentType>;
  ongoingJoinedEvents?: Maybe<Array<Maybe<EventType>>>;
  ownedEvents?: Maybe<Array<Maybe<EventType>>>;
  pastJoinedEvents?: Maybe<Array<Maybe<EventType>>>;
  post?: Maybe<PostType>;
  profilePictureGcloudUrl?: Maybe<Scalars['String']['output']>;
  requestsPending?: Maybe<Array<Maybe<RelationshipType>>>;
  requestsSent?: Maybe<Array<Maybe<RelationshipType>>>;
  unfinishedEvents?: Maybe<Array<Maybe<UnfinishedEventType>>>;
  unratedEvents?: Maybe<Array<Maybe<EventType>>>;
  user?: Maybe<UserType>;
  usernameTaken: Scalars['Boolean']['output'];
};


export type QueriesChatArgs = {
  chatId: Scalars['Int']['input'];
};


export type QueriesEmailTakenArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesEventArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueriesEventPictureGcloudUrlArgs = {
  eventId: Scalars['Int']['input'];
};


export type QueriesEventPostsArgs = {
  end?: InputMaybe<Scalars['Int']['input']>;
  eventId?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};


export type QueriesGlobalPostsArgs = {
  end?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};


export type QueriesMyNotificationsArgs = {
  lastFetch: Scalars['DateTime']['input'];
};


export type QueriesPostArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueriesUserArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueriesUsernameTakenArgs = {
  username?: InputMaybe<Scalars['String']['input']>;
};

export type RateEventMutation = {
  __typename?: 'RateEventMutation';
  event?: Maybe<EventType>;
};

export type RejectFriendRequestMutation = {
  __typename?: 'RejectFriendRequestMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type RelationshipType = {
  __typename?: 'RelationshipType';
  chat?: Maybe<ChatType>;
  lastUpdate: Scalars['DateTime']['output'];
  status?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserType>;
};

export type RemoveFriendMutation = {
  __typename?: 'RemoveFriendMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type RemovePreferredActivity = {
  __typename?: 'RemovePreferredActivity';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ReplyOnPostCommentMutation = {
  __typename?: 'ReplyOnPostCommentMutation';
  comment?: Maybe<PostCommentType>;
};

export type SendChatMessage = {
  __typename?: 'SendChatMessage';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SendConfirmationEmailMutation = {
  __typename?: 'SendConfirmationEmailMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SendFriendRequestMutation = {
  __typename?: 'SendFriendRequestMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SendPasswordResetEmailMutation = {
  __typename?: 'SendPasswordResetEmailMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SetChatNickname = {
  __typename?: 'SetChatNickname';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SetChatNotifications = {
  __typename?: 'SetChatNotifications';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SetEventLocation = {
  __typename?: 'SetEventLocation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SetPreferredActivity = {
  __typename?: 'SetPreferredActivity';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SignupMutation = {
  __typename?: 'SignupMutation';
  myProfile?: Maybe<ProfileType>;
};

/** An enumeration. */
export const SkillLevel = {
  Advanced: 'ADVANCED',
  Beginner: 'BEGINNER',
  Expert: 'EXPERT',
  Intermediate: 'INTERMEDIATE'
} as const;

export type SkillLevel = typeof SkillLevel[keyof typeof SkillLevel];
/** An enumeration. */
export const SocialInteractionImportance = {
  Neutral: 'NEUTRAL',
  NotImportantAtAll: 'NOT_IMPORTANT_AT_ALL',
  NotVeryImportant: 'NOT_VERY_IMPORTANT',
  SomewhatImportant: 'SOMEWHAT_IMPORTANT',
  VeryImportant: 'VERY_IMPORTANT'
} as const;

export type SocialInteractionImportance = typeof SocialInteractionImportance[keyof typeof SocialInteractionImportance];
export type SpectateEventMutation = {
  __typename?: 'SpectateEventMutation';
  eventMember?: Maybe<EventMemberType>;
};

export type SubmitSurveyMutation = {
  __typename?: 'SubmitSurveyMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Subscriptions = {
  __typename?: 'Subscriptions';
  chatLastOpen?: Maybe<Array<Maybe<WsLastOpenType>>>;
  chatMessages?: Maybe<Array<Maybe<WsChatMessageType>>>;
};


export type SubscriptionsChatLastOpenArgs = {
  chatId: Scalars['Int']['input'];
};


export type SubscriptionsChatMessagesArgs = {
  chatId: Scalars['Int']['input'];
};

/** An enumeration. */
export const TimeOfTheDay = {
  Afternoon: 'AFTERNOON',
  Evening: 'EVENING',
  Morning: 'MORNING',
  Night: 'NIGHT'
} as const;

export type TimeOfTheDay = typeof TimeOfTheDay[keyof typeof TimeOfTheDay];
export type UnfinishedEventType = {
  __typename?: 'UnfinishedEventType';
  acceptedGenders?: Maybe<Scalars['JSONString']['output']>;
  activity: ActivityType;
  allowSpectators: Scalars['Boolean']['output'];
  averageScore?: Maybe<Scalars['Float']['output']>;
  chat?: Maybe<ChatType>;
  comments?: Maybe<Array<Maybe<EventCommentType>>>;
  description?: Maybe<Scalars['String']['output']>;
  endTime: Scalars['DateTime']['output'];
  finished: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  location: LocationType;
  maxAge?: Maybe<Scalars['Int']['output']>;
  maxParticipants?: Maybe<Scalars['Int']['output']>;
  members: Array<EventMemberType>;
  minAge?: Maybe<Scalars['Int']['output']>;
  moderators?: Maybe<Array<Maybe<EventMemberType>>>;
  organizer?: Maybe<EventMemberType>;
  participants?: Maybe<Array<Maybe<EventMemberType>>>;
  posts: Array<PostType>;
  requirements?: Maybe<Scalars['JSONString']['output']>;
  role?: Maybe<MemberRole>;
  skillLevel?: Maybe<Scalars['String']['output']>;
  spectators?: Maybe<Array<Maybe<EventMemberType>>>;
  startTime: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
  unconfirmedParticipants?: Maybe<Array<Maybe<EventMemberType>>>;
};

export type UnlikePostMutation = {
  __typename?: 'UnlikePostMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateMaxTravelDistanceMutation = {
  __typename?: 'UpdateMaxTravelDistanceMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateProfileLocation = {
  __typename?: 'UpdateProfileLocation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UserNotificationType = BaseNotificationType & {
  __typename?: 'UserNotificationType';
  id?: Maybe<Scalars['Int']['output']>;
  notificationType?: Maybe<NotificationEnum>;
  time?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UserType>;
};

export type UserType = {
  __typename?: 'UserType';
  bio: Scalars['String']['output'];
  dateJoined: Scalars['DateTime']['output'];
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  dislikes?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  frequencyOfPhysicalActivity?: Maybe<Scalars['String']['output']>;
  friendCount?: Maybe<Scalars['Int']['output']>;
  friends?: Maybe<Array<Maybe<UserType>>>;
  gender?: Maybe<MainAppUserGenderChoices>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  likes?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<LocationType>;
  mainInterest?: Maybe<Scalars['String']['output']>;
  matchedParticipationLikelihood?: Maybe<Scalars['String']['output']>;
  physicalActivitySatisfaction?: Maybe<Scalars['String']['output']>;
  preferredActivities: Array<PreferredActivityType>;
  preferredPartySize?: Maybe<Scalars['String']['output']>;
  relationship?: Maybe<RelationshipType>;
  socialInteractionImportance?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
  xp: Scalars['Int']['output'];
};

export type WsChatMessageType = {
  __typename?: 'WSChatMessageType';
  attachmentUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  textContent?: Maybe<Scalars['String']['output']>;
  timeSent?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type WsLastOpenType = {
  __typename?: 'WSLastOpenType';
  lastOpen?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type GetEventQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


