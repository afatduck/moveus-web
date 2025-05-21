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
  DateTime: { input: Date; output: Date; }
  Date: { input: Date; output: Date; }
  JSONString: { input: any; output: any; }
};

export type UserNotificationType = BaseNotificationType & {
  __typename?: 'UserNotificationType';
  id?: Maybe<Scalars['Int']['output']>;
  notificationType?: Maybe<NotificationEnum>;
  time?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UserType>;
};

export type BaseNotificationType = {
  id?: Maybe<Scalars['Int']['output']>;
  notificationType?: Maybe<NotificationEnum>;
  time?: Maybe<Scalars['DateTime']['output']>;
};

/** An enumeration. */
export const NotificationEnum = {
  FriendRequest: 'FRIEND_REQUEST',
  FriendAccepted: 'FRIEND_ACCEPTED',
  EventFinished: 'EVENT_FINISHED'
} as const;

export type NotificationEnum = typeof NotificationEnum[keyof typeof NotificationEnum];
export type UserType = {
  __typename?: 'UserType';
  id?: Maybe<Scalars['Int']['output']>;
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean']['output'];
  dateJoined: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
  bio: Scalars['String']['output'];
  gender?: Maybe<MainAppUserGenderChoices>;
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  xp: Scalars['Int']['output'];
  verified: Scalars['Boolean']['output'];
  preferredActivities: Array<PreferredActivityType>;
  likes?: Maybe<Scalars['Int']['output']>;
  dislikes?: Maybe<Scalars['Int']['output']>;
  friends?: Maybe<Array<Maybe<UserType>>>;
  friendCount?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<LocationType>;
  email?: Maybe<Scalars['String']['output']>;
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  relationship?: Maybe<RelationshipType>;
  frequencyOfPhysicalActivity?: Maybe<Scalars['String']['output']>;
  socialInteractionImportance?: Maybe<Scalars['String']['output']>;
  preferredPartySize?: Maybe<Scalars['String']['output']>;
  physicalActivitySatisfaction?: Maybe<Scalars['String']['output']>;
  matchedParticipationLikelihood?: Maybe<Scalars['String']['output']>;
  mainInterest?: Maybe<Scalars['String']['output']>;
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
export type PreferredActivityType = {
  __typename?: 'PreferredActivityType';
  activity: ActivityType;
  skillLevel?: Maybe<Scalars['String']['output']>;
};

export type ActivityType = {
  __typename?: 'ActivityType';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type LocationType = {
  __typename?: 'LocationType';
  id?: Maybe<Scalars['Int']['output']>;
  longitude: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['Int']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
};

export type RelationshipType = {
  __typename?: 'RelationshipType';
  lastUpdate: Scalars['DateTime']['output'];
  status?: Maybe<Scalars['String']['output']>;
  chat?: Maybe<ChatType>;
  user?: Maybe<UserType>;
};

export type ChatType = {
  __typename?: 'ChatType';
  id?: Maybe<Scalars['Int']['output']>;
  timeCreated: Scalars['DateTime']['output'];
  members: Array<ChatMemberType>;
  messages: Array<ChatMessageType>;
  notifications?: Maybe<ChatNotifications>;
};

export type ChatMemberType = {
  __typename?: 'ChatMemberType';
  user: UserType;
  nickname: Scalars['String']['output'];
  lastOpen?: Maybe<Scalars['DateTime']['output']>;
  notifications?: Maybe<Scalars['String']['output']>;
};

export type ChatMessageType = {
  __typename?: 'ChatMessageType';
  id?: Maybe<Scalars['Int']['output']>;
  user: UserType;
  textContent: Scalars['String']['output'];
  timeSent: Scalars['DateTime']['output'];
  attachmentUrl?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export const ChatNotifications = {
  None: 'NONE',
  All: 'ALL',
  MentionsOnly: 'MENTIONS_ONLY'
} as const;

export type ChatNotifications = typeof ChatNotifications[keyof typeof ChatNotifications];
export type EventNotificationType = BaseNotificationType & {
  __typename?: 'EventNotificationType';
  id?: Maybe<Scalars['Int']['output']>;
  notificationType?: Maybe<NotificationEnum>;
  time?: Maybe<Scalars['DateTime']['output']>;
  event?: Maybe<EventType>;
};

export type EventType = {
  __typename?: 'EventType';
  id?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  startTime: Scalars['DateTime']['output'];
  endTime: Scalars['DateTime']['output'];
  location: LocationType;
  requirements?: Maybe<Scalars['JSONString']['output']>;
  chat?: Maybe<ChatType>;
  activity: ActivityType;
  skillLevel?: Maybe<Scalars['String']['output']>;
  maxParticipants?: Maybe<Scalars['Int']['output']>;
  allowSpectators: Scalars['Boolean']['output'];
  minAge?: Maybe<Scalars['Int']['output']>;
  maxAge?: Maybe<Scalars['Int']['output']>;
  acceptedGenders?: Maybe<Scalars['JSONString']['output']>;
  finished: Scalars['Boolean']['output'];
  members: Array<EventMemberType>;
  posts: Array<PostType>;
  organizer?: Maybe<EventMemberType>;
  participants?: Maybe<Array<Maybe<EventMemberType>>>;
  moderators?: Maybe<Array<Maybe<EventMemberType>>>;
  spectators?: Maybe<Array<Maybe<EventMemberType>>>;
  role?: Maybe<MemberRole>;
  averageScore?: Maybe<Scalars['Float']['output']>;
  comments?: Maybe<Array<Maybe<EventCommentType>>>;
};

export type EventMemberType = {
  __typename?: 'EventMemberType';
  user: UserType;
  role?: Maybe<Scalars['String']['output']>;
  hasParticipated?: Maybe<Scalars['Boolean']['output']>;
  score?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  participates: Scalars['Boolean']['output'];
};

export type PostType = {
  __typename?: 'PostType';
  id?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  content: Scalars['String']['output'];
  timePosted: Scalars['DateTime']['output'];
  event?: Maybe<EventType>;
  likedBy: Array<UserType>;
  comments?: Maybe<Array<Maybe<PostCommentType>>>;
  likes?: Maybe<Scalars['Int']['output']>;
};


export type PostTypeCommentsArgs = {
  start?: InputMaybe<Scalars['Int']['input']>;
  end?: InputMaybe<Scalars['Int']['input']>;
};

export type PostCommentType = {
  __typename?: 'PostCommentType';
  id?: Maybe<Scalars['Int']['output']>;
  user: UserType;
  post: PostType;
  text: Scalars['String']['output'];
  timePosted: Scalars['DateTime']['output'];
  isReplyTo?: Maybe<PostCommentType>;
  replies: Array<PostCommentType>;
  hasReplies?: Maybe<Scalars['Boolean']['output']>;
};

/** An enumeration. */
export const MemberRole = {
  Spectator: 'SPECTATOR',
  Participant: 'PARTICIPANT',
  Moderator: 'MODERATOR',
  Organizer: 'ORGANIZER'
} as const;

export type MemberRole = typeof MemberRole[keyof typeof MemberRole];
export type EventCommentType = {
  __typename?: 'EventCommentType';
  member?: Maybe<EventMemberType>;
  comment?: Maybe<Scalars['String']['output']>;
};

export type Queries = {
  __typename?: 'Queries';
  event?: Maybe<EventType>;
  joinedEvents?: Maybe<Array<Maybe<EventType>>>;
  ownedEvents?: Maybe<Array<Maybe<EventType>>>;
  pastJoinedEvents?: Maybe<Array<Maybe<EventType>>>;
  ongoingJoinedEvents?: Maybe<Array<Maybe<EventType>>>;
  futureJoinedEvents?: Maybe<Array<Maybe<EventType>>>;
  unfinishedEvents?: Maybe<Array<Maybe<UnfinishedEventType>>>;
  unratedEvents?: Maybe<Array<Maybe<EventType>>>;
  myRecommendedEvents?: Maybe<Array<Maybe<EventType>>>;
  profilePictureGcloudUrl?: Maybe<Scalars['String']['output']>;
  eventPictureGcloudUrl?: Maybe<Scalars['String']['output']>;
  newAttachment?: Maybe<AttachmentType>;
  requestsSent?: Maybe<Array<Maybe<RelationshipType>>>;
  countRequestsSent?: Maybe<Scalars['Int']['output']>;
  requestsPending?: Maybe<Array<Maybe<RelationshipType>>>;
  countRequestsPending?: Maybe<Scalars['Int']['output']>;
  friends?: Maybe<Array<Maybe<RelationshipType>>>;
  countFriends?: Maybe<Scalars['Int']['output']>;
  allActivities?: Maybe<Array<Maybe<ActivityType>>>;
  usernameTaken: Scalars['Boolean']['output'];
  emailTaken: Scalars['Boolean']['output'];
  isLoggedIn?: Maybe<Scalars['Boolean']['output']>;
  post?: Maybe<PostType>;
  eventPosts?: Maybe<Array<Maybe<PostType>>>;
  globalPosts?: Maybe<Array<Maybe<PostType>>>;
  myNotifications?: Maybe<Array<Maybe<BaseNotificationType>>>;
  myChats?: Maybe<Array<Maybe<ChatType>>>;
  chat?: Maybe<ChatType>;
  myProfile?: Maybe<ProfileType>;
  user?: Maybe<UserType>;
};


export type QueriesEventArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueriesEventPictureGcloudUrlArgs = {
  eventId: Scalars['Int']['input'];
};


export type QueriesUsernameTakenArgs = {
  username?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesEmailTakenArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
};


export type QueriesPostArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueriesEventPostsArgs = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  end?: InputMaybe<Scalars['Int']['input']>;
};


export type QueriesGlobalPostsArgs = {
  start?: InputMaybe<Scalars['Int']['input']>;
  end?: InputMaybe<Scalars['Int']['input']>;
};


export type QueriesMyNotificationsArgs = {
  lastFetch: Scalars['DateTime']['input'];
};


export type QueriesChatArgs = {
  chatId: Scalars['Int']['input'];
};


export type QueriesUserArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type UnfinishedEventType = {
  __typename?: 'UnfinishedEventType';
  id?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  startTime: Scalars['DateTime']['output'];
  endTime: Scalars['DateTime']['output'];
  location: LocationType;
  requirements?: Maybe<Scalars['JSONString']['output']>;
  chat?: Maybe<ChatType>;
  activity: ActivityType;
  skillLevel?: Maybe<Scalars['String']['output']>;
  maxParticipants?: Maybe<Scalars['Int']['output']>;
  allowSpectators: Scalars['Boolean']['output'];
  minAge?: Maybe<Scalars['Int']['output']>;
  maxAge?: Maybe<Scalars['Int']['output']>;
  acceptedGenders?: Maybe<Scalars['JSONString']['output']>;
  finished: Scalars['Boolean']['output'];
  members: Array<EventMemberType>;
  posts: Array<PostType>;
  organizer?: Maybe<EventMemberType>;
  participants?: Maybe<Array<Maybe<EventMemberType>>>;
  moderators?: Maybe<Array<Maybe<EventMemberType>>>;
  spectators?: Maybe<Array<Maybe<EventMemberType>>>;
  role?: Maybe<MemberRole>;
  averageScore?: Maybe<Scalars['Float']['output']>;
  comments?: Maybe<Array<Maybe<EventCommentType>>>;
  unconfirmedParticipants?: Maybe<Array<Maybe<EventMemberType>>>;
};

export type AttachmentType = {
  __typename?: 'AttachmentType';
  id?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ProfileType = {
  __typename?: 'ProfileType';
  id?: Maybe<Scalars['Int']['output']>;
  password: Scalars['String']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean']['output'];
  dateJoined: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
  email: Scalars['String']['output'];
  bio: Scalars['String']['output'];
  gender?: Maybe<Scalars['String']['output']>;
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  frequencyOfPhysicalActivity?: Maybe<FrequencyOfPhycicalActivity>;
  socialInteractionImportance?: Maybe<SocialInteractionImportance>;
  preferredPartySize?: Maybe<PreferredPartySize>;
  formedRelationshipTypes?: Maybe<Array<Maybe<FormedRelationshipsType>>>;
  physicalActivitySatisfaction?: Maybe<PhysicalActivitySatisfaction>;
  preferredPartnerCharacteristics?: Maybe<Array<Maybe<PreferredPartnerCharacteristics>>>;
  matchedParticipationLikelihood?: Maybe<MatchedParticipationLikelihood>;
  preferredTimeOfTheDay?: Maybe<Array<Maybe<TimeOfTheDay>>>;
  preferredEventDuration?: Maybe<Scalars['Int']['output']>;
  genderPreference?: Maybe<Array<Maybe<GenderNoPnts>>>;
  maxTravelDistance?: Maybe<Scalars['Int']['output']>;
  mainInterest?: Maybe<MainInterest>;
  isCapeable: Scalars['Boolean']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  xp: Scalars['Int']['output'];
  verified: Scalars['Boolean']['output'];
  eventmemberSet: Array<EventMemberType>;
  likes?: Maybe<Scalars['Int']['output']>;
  privacySettings: Array<PrivacySettingType>;
  chatmemberSet: Array<ChatMemberType>;
  chatmessageSet: Array<ChatMessageType>;
  preferredActivities: Array<PreferredActivityType>;
  dislikes?: Maybe<Scalars['Int']['output']>;
  friends?: Maybe<Array<Maybe<UserType>>>;
  friendCount?: Maybe<Scalars['Int']['output']>;
};

/** An enumeration. */
export const FrequencyOfPhycicalActivity = {
  Daily: 'DAILY',
  FewTimesAWeek: 'FEW_TIMES_A_WEEK',
  OnceAWeek: 'ONCE_A_WEEK',
  Occasionally: 'OCCASIONALLY',
  Rarely: 'RARELY'
} as const;

export type FrequencyOfPhycicalActivity = typeof FrequencyOfPhycicalActivity[keyof typeof FrequencyOfPhycicalActivity];
/** An enumeration. */
export const SocialInteractionImportance = {
  VeryImportant: 'VERY_IMPORTANT',
  SomewhatImportant: 'SOMEWHAT_IMPORTANT',
  Neutral: 'NEUTRAL',
  NotVeryImportant: 'NOT_VERY_IMPORTANT',
  NotImportantAtAll: 'NOT_IMPORTANT_AT_ALL'
} as const;

export type SocialInteractionImportance = typeof SocialInteractionImportance[keyof typeof SocialInteractionImportance];
/** An enumeration. */
export const PreferredPartySize = {
  Alone: 'ALONE',
  SmallGroup: 'SMALL_GROUP',
  LargeGroup: 'LARGE_GROUP'
} as const;

export type PreferredPartySize = typeof PreferredPartySize[keyof typeof PreferredPartySize];
/** An enumeration. */
export const FormedRelationshipsType = {
  Acquaintances: 'ACQUAINTANCES',
  Friends: 'FRIENDS',
  RomanticRelationships: 'ROMANTIC_RELATIONSHIPS'
} as const;

export type FormedRelationshipsType = typeof FormedRelationshipsType[keyof typeof FormedRelationshipsType];
/** An enumeration. */
export const PhysicalActivitySatisfaction = {
  VerySatisfied: 'VERY_SATISFIED',
  Satisfied: 'SATISFIED',
  Neutral: 'NEUTRAL',
  Dissatisfied: 'DISSATISFIED',
  VeryDissatisfied: 'VERY_DISSATISFIED'
} as const;

export type PhysicalActivitySatisfaction = typeof PhysicalActivitySatisfaction[keyof typeof PhysicalActivitySatisfaction];
/** An enumeration. */
export const PreferredPartnerCharacteristics = {
  SimilarSkillLevel: 'SIMILAR_SKILL_LEVEL',
  SimilarAge: 'SIMILAR_AGE',
  SameGender: 'SAME_GENDER',
  SimilarInterests: 'SIMILAR_INTERESTS',
  SimilarHealthGoals: 'SIMILAR_HEALTH_GOALS',
  Proximity: 'PROXIMITY',
  SimilarHobbies: 'SIMILAR_HOBBIES'
} as const;

export type PreferredPartnerCharacteristics = typeof PreferredPartnerCharacteristics[keyof typeof PreferredPartnerCharacteristics];
/** An enumeration. */
export const MatchedParticipationLikelihood = {
  VeryLikely: 'VERY_LIKELY',
  Likely: 'LIKELY',
  Neutral: 'NEUTRAL',
  Unlikely: 'UNLIKELY',
  VeryUnlikely: 'VERY_UNLIKELY'
} as const;

export type MatchedParticipationLikelihood = typeof MatchedParticipationLikelihood[keyof typeof MatchedParticipationLikelihood];
/** An enumeration. */
export const TimeOfTheDay = {
  Morning: 'MORNING',
  Afternoon: 'AFTERNOON',
  Evening: 'EVENING',
  Night: 'NIGHT'
} as const;

export type TimeOfTheDay = typeof TimeOfTheDay[keyof typeof TimeOfTheDay];
/** An enumeration. */
export const GenderNoPnts = {
  Male: 'MALE',
  Female: 'FEMALE',
  NonBinary: 'NON_BINARY'
} as const;

export type GenderNoPnts = typeof GenderNoPnts[keyof typeof GenderNoPnts];
/** An enumeration. */
export const MainInterest = {
  Socialize: 'SOCIALIZE',
  Fun: 'FUN',
  Sport: 'SPORT'
} as const;

export type MainInterest = typeof MainInterest[keyof typeof MainInterest];
export type PrivacySettingType = {
  __typename?: 'PrivacySettingType';
  setting?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
};

export type Mutations = {
  __typename?: 'Mutations';
  createEvent?: Maybe<CreateEventMutation>;
  alterEvent?: Maybe<AlterEventMutation>;
  deleteEvent?: Maybe<DeleteEventMutation>;
  reportUserMutation?: Maybe<ReportUserMutation>;
  reportEventMutation?: Maybe<ReportEventMutation>;
  updateAllPrivacySettings?: Maybe<UpdateAllPrviacySettingsMutation>;
  sendFriendRequest?: Maybe<SendFriendRequestMutation>;
  acceptFriendRequest?: Maybe<AcceptFriendRequestMutation>;
  cancelFriendRequest?: Maybe<CancelFriendRequestMutation>;
  rejectFriendRequest?: Maybe<RejectFriendRequestMutation>;
  removeFriend?: Maybe<RemoveFriendMutation>;
  setPreferredActivity?: Maybe<SetPreferredActivity>;
  removePreferredActivity?: Maybe<RemovePreferredActivity>;
  joinEvent?: Maybe<JoinEventMutation>;
  spectateEvent?: Maybe<SpectateEventMutation>;
  leaveEvent?: Maybe<LeaveEventMutation>;
  kickEventMember?: Maybe<KickEventMemberMutation>;
  login?: Maybe<LoginMutation>;
  signup?: Maybe<SignupMutation>;
  logout?: Maybe<LogoutMutation>;
  deleteAccount?: Maybe<DeleteAccountMutation>;
  sendConfirmationEmail?: Maybe<SendConfirmationEmailMutation>;
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmailMutation>;
  createPost?: Maybe<CreatePostMutation>;
  likePost?: Maybe<LikePostMutation>;
  unlikePost?: Maybe<UnlikePostMutation>;
  commentOnPost?: Maybe<CommentOnPostMutation>;
  replyOnPostComment?: Maybe<ReplyOnPostCommentMutation>;
  updateProfileLocation?: Maybe<UpdateProfileLocation>;
  alterEventLocation?: Maybe<AlterEventLocation>;
  setEventLocation?: Maybe<SetEventLocation>;
  setChatNotifications?: Maybe<SetChatNotifications>;
  setChatNickname?: Maybe<SetChatNickname>;
  sendChatMessage?: Maybe<SendChatMessage>;
  confirmMemberParticipation?: Maybe<ConfirmMemberParticipationMutation>;
  finishEvent?: Maybe<FinishEventMutation>;
  rateEvent?: Maybe<RateEventMutation>;
  likeEventMember?: Maybe<LikeEventMemberMutation>;
  updateSurveyInfo?: Maybe<UpdateSurveyInfoMutation>;
  updateBasicInfo?: Maybe<UpdateBasicInfoMutation>;
  updateMaxTravelDistance?: Maybe<UpdateMaxTravelDistanceMutation>;
};


export type MutationsCreateEventArgs = {
  acceptedGenders?: InputMaybe<Array<InputMaybe<GenderNoPnts>>>;
  activity: Activity;
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


export type MutationsDeleteEventArgs = {
  eventId: Scalars['Int']['input'];
};


export type MutationsReportUserMutationArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['Int']['input'];
};


export type MutationsReportEventMutationArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  eventId: Scalars['Int']['input'];
};


export type MutationsUpdateAllPrivacySettingsArgs = {
  scope: PrivacyScope;
};


export type MutationsSendFriendRequestArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationsAcceptFriendRequestArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationsCancelFriendRequestArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationsRejectFriendRequestArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationsRemoveFriendArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationsSetPreferredActivityArgs = {
  activity?: InputMaybe<Activity>;
  skillLevel?: InputMaybe<SkillLevel>;
};


export type MutationsRemovePreferredActivityArgs = {
  activity?: InputMaybe<Activity>;
};


export type MutationsJoinEventArgs = {
  eventId: Scalars['Int']['input'];
};


export type MutationsSpectateEventArgs = {
  eventId: Scalars['Int']['input'];
};


export type MutationsLeaveEventArgs = {
  eventId: Scalars['Int']['input'];
};


export type MutationsKickEventMemberArgs = {
  eventId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationsLoginArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsSignupArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationsCreatePostArgs = {
  content: Scalars['String']['input'];
  eventId: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};


export type MutationsLikePostArgs = {
  postId: Scalars['Int']['input'];
};


export type MutationsUnlikePostArgs = {
  postId: Scalars['Int']['input'];
};


export type MutationsCommentOnPostArgs = {
  postId: Scalars['Int']['input'];
  text: Scalars['String']['input'];
};


export type MutationsReplyOnPostCommentArgs = {
  commentId: Scalars['Int']['input'];
  text: Scalars['String']['input'];
};


export type MutationsUpdateProfileLocationArgs = {
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
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


export type MutationsSetEventLocationArgs = {
  eventId?: InputMaybe<Scalars['Int']['input']>;
  locationId?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationsSetChatNotificationsArgs = {
  chatId: Scalars['Int']['input'];
  notifications: ChatNotifications;
};


export type MutationsSetChatNicknameArgs = {
  chatId: Scalars['Int']['input'];
  nickname: Scalars['String']['input'];
};


export type MutationsSendChatMessageArgs = {
  attachmentId?: InputMaybe<Scalars['String']['input']>;
  chatId: Scalars['Int']['input'];
  message: Scalars['String']['input'];
};


export type MutationsConfirmMemberParticipationArgs = {
  eventId: Scalars['Int']['input'];
  participated: Scalars['Boolean']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationsFinishEventArgs = {
  eventId: Scalars['Int']['input'];
};


export type MutationsRateEventArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  eventId: Scalars['Int']['input'];
  score: EventRating;
};


export type MutationsLikeEventMemberArgs = {
  eventId: Scalars['Int']['input'];
  like: Scalars['Boolean']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationsUpdateSurveyInfoArgs = {
  formedRelationshipTypes?: InputMaybe<Array<InputMaybe<FormedRelationshipsType>>>;
  frequencyOfPhysicalActivity?: InputMaybe<FrequencyOfPhycicalActivity>;
  genderPreference?: InputMaybe<Array<InputMaybe<GenderNoPnts>>>;
  mainInterest?: InputMaybe<MainInterest>;
  matchedParticipationLikelihood?: InputMaybe<MatchedParticipationLikelihood>;
  physicalActivitySatisfaction?: InputMaybe<PhysicalActivitySatisfaction>;
  preferredEventDuration?: InputMaybe<Scalars['Int']['input']>;
  preferredPartnerCharacteristics?: InputMaybe<Array<InputMaybe<PreferredPartnerCharacteristics>>>;
  preferredPartySize?: InputMaybe<PreferredPartySize>;
  preferredTimeOfTheDay?: InputMaybe<Array<InputMaybe<TimeOfTheDay>>>;
  socialInteractionImportance?: InputMaybe<SocialInteractionImportance>;
};


export type MutationsUpdateBasicInfoArgs = {
  bio?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsUpdateMaxTravelDistanceArgs = {
  distance?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateEventMutation = {
  __typename?: 'CreateEventMutation';
  event?: Maybe<EventType>;
};

/** An enumeration. */
export const Activity = {
  Hiking: 'HIKING',
  Running: 'RUNNING',
  Soccer: 'SOCCER',
  Tennis: 'TENNIS',
  Gym: 'GYM'
} as const;

export type Activity = typeof Activity[keyof typeof Activity];
/** An enumeration. */
export const CountryCode = {
  Af: 'AF',
  Al: 'AL',
  Dz: 'DZ',
  As: 'AS',
  Ad: 'AD',
  Ao: 'AO',
  Ai: 'AI',
  Aq: 'AQ',
  Ag: 'AG',
  Ar: 'AR',
  Am: 'AM',
  Aw: 'AW',
  Au: 'AU',
  At: 'AT',
  Az: 'AZ',
  Bs: 'BS',
  Bh: 'BH',
  Bd: 'BD',
  Bb: 'BB',
  By: 'BY',
  Be: 'BE',
  Bz: 'BZ',
  Bj: 'BJ',
  Bm: 'BM',
  Bt: 'BT',
  Bo: 'BO',
  Ba: 'BA',
  Bw: 'BW',
  Br: 'BR',
  Io: 'IO',
  Bn: 'BN',
  Bg: 'BG',
  Bf: 'BF',
  Bi: 'BI',
  Kh: 'KH',
  Cm: 'CM',
  Ca: 'CA',
  Cv: 'CV',
  Ky: 'KY',
  Cf: 'CF',
  Td: 'TD',
  Cl: 'CL',
  Cn: 'CN',
  Co: 'CO',
  Km: 'KM',
  Cg: 'CG',
  Cd: 'CD',
  Ck: 'CK',
  Cr: 'CR',
  Ci: 'CI',
  Hr: 'HR',
  Cu: 'CU',
  Cy: 'CY',
  Cz: 'CZ',
  Dk: 'DK',
  Dj: 'DJ',
  Dm: 'DM',
  Do: 'DO',
  Ec: 'EC',
  Eg: 'EG',
  Sv: 'SV',
  Gq: 'GQ',
  Er: 'ER',
  Ee: 'EE',
  Sz: 'SZ',
  Et: 'ET',
  Fj: 'FJ',
  Fi: 'FI',
  Fr: 'FR',
  Ga: 'GA',
  Gm: 'GM',
  Ge: 'GE',
  De: 'DE',
  Gh: 'GH',
  Gr: 'GR',
  Gd: 'GD',
  Gt: 'GT',
  Gn: 'GN',
  Gw: 'GW',
  Gy: 'GY',
  Ht: 'HT',
  Hn: 'HN',
  Hu: 'HU',
  Is: 'IS',
  In: 'IN',
  Id: 'ID',
  Ir: 'IR',
  Iq: 'IQ',
  Ie: 'IE',
  Il: 'IL',
  It: 'IT',
  Jm: 'JM',
  Jp: 'JP',
  Jo: 'JO',
  Kz: 'KZ',
  Ke: 'KE',
  Ki: 'KI',
  Kp: 'KP',
  Kr: 'KR',
  Kw: 'KW',
  Kg: 'KG',
  La: 'LA',
  Lv: 'LV',
  Lb: 'LB',
  Ls: 'LS',
  Lr: 'LR',
  Ly: 'LY',
  Li: 'LI',
  Lt: 'LT',
  Lu: 'LU',
  Mg: 'MG',
  Mw: 'MW',
  My: 'MY',
  Mv: 'MV',
  Ml: 'ML',
  Mt: 'MT',
  Mh: 'MH',
  Mr: 'MR',
  Mu: 'MU',
  Mx: 'MX',
  Fm: 'FM',
  Md: 'MD',
  Mc: 'MC',
  Mn: 'MN',
  Me: 'ME',
  Ma: 'MA',
  Mz: 'MZ',
  Mm: 'MM',
  Na: 'NA',
  Nr: 'NR',
  Np: 'NP',
  Nl: 'NL',
  Nz: 'NZ',
  Ni: 'NI',
  Ne: 'NE',
  Ng: 'NG',
  Mk: 'MK',
  No: 'NO',
  Om: 'OM',
  Pk: 'PK',
  Pw: 'PW',
  Ps: 'PS',
  Pa: 'PA',
  Pg: 'PG',
  Py: 'PY',
  Pe: 'PE',
  Ph: 'PH',
  Pl: 'PL',
  Pt: 'PT',
  Qa: 'QA',
  Ro: 'RO',
  Ru: 'RU',
  Rw: 'RW',
  Kn: 'KN',
  Lc: 'LC',
  Vc: 'VC',
  Ws: 'WS',
  Sm: 'SM',
  St: 'ST',
  Sa: 'SA',
  Sn: 'SN',
  Rs: 'RS',
  Sc: 'SC',
  Sl: 'SL',
  Sg: 'SG',
  Sk: 'SK',
  Si: 'SI',
  Sb: 'SB',
  So: 'SO',
  Za: 'ZA',
  Ss: 'SS',
  Es: 'ES',
  Lk: 'LK',
  Sd: 'SD',
  Sr: 'SR',
  Se: 'SE',
  Ch: 'CH',
  Sy: 'SY',
  Tw: 'TW',
  Tj: 'TJ',
  Tz: 'TZ',
  Th: 'TH',
  Tl: 'TL',
  Tg: 'TG',
  To: 'TO',
  Tt: 'TT',
  Tn: 'TN',
  Tr: 'TR',
  Tm: 'TM',
  Tv: 'TV',
  Ug: 'UG',
  Ua: 'UA',
  Ae: 'AE',
  Gb: 'GB',
  Us: 'US',
  Uy: 'UY',
  Uz: 'UZ',
  Vu: 'VU',
  Ve: 'VE',
  Vn: 'VN',
  Ye: 'YE',
  Zm: 'ZM',
  Zw: 'ZW'
} as const;

export type CountryCode = typeof CountryCode[keyof typeof CountryCode];
/** An enumeration. */
export const SkillLevel = {
  Beginner: 'BEGINNER',
  Intermediate: 'INTERMEDIATE',
  Advanced: 'ADVANCED',
  Expert: 'EXPERT'
} as const;

export type SkillLevel = typeof SkillLevel[keyof typeof SkillLevel];
export type AlterEventMutation = {
  __typename?: 'AlterEventMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteEventMutation = {
  __typename?: 'DeleteEventMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ReportUserMutation = {
  __typename?: 'ReportUserMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ReportEventMutation = {
  __typename?: 'ReportEventMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateAllPrviacySettingsMutation = {
  __typename?: 'UpdateAllPrviacySettingsMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** An enumeration. */
export const PrivacyScope = {
  Noone: 'NOONE',
  Friends: 'FRIENDS',
  Everyone: 'EVERYONE'
} as const;

export type PrivacyScope = typeof PrivacyScope[keyof typeof PrivacyScope];
export type SendFriendRequestMutation = {
  __typename?: 'SendFriendRequestMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type AcceptFriendRequestMutation = {
  __typename?: 'AcceptFriendRequestMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CancelFriendRequestMutation = {
  __typename?: 'CancelFriendRequestMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type RejectFriendRequestMutation = {
  __typename?: 'RejectFriendRequestMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type RemoveFriendMutation = {
  __typename?: 'RemoveFriendMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SetPreferredActivity = {
  __typename?: 'SetPreferredActivity';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type RemovePreferredActivity = {
  __typename?: 'RemovePreferredActivity';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type JoinEventMutation = {
  __typename?: 'JoinEventMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SpectateEventMutation = {
  __typename?: 'SpectateEventMutation';
  eventMember?: Maybe<EventMemberType>;
};

export type LeaveEventMutation = {
  __typename?: 'LeaveEventMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type KickEventMemberMutation = {
  __typename?: 'KickEventMemberMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type LoginMutation = {
  __typename?: 'LoginMutation';
  myProfile?: Maybe<ProfileType>;
};

export type SignupMutation = {
  __typename?: 'SignupMutation';
  myProfile?: Maybe<ProfileType>;
};

export type LogoutMutation = {
  __typename?: 'LogoutMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteAccountMutation = {
  __typename?: 'DeleteAccountMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SendConfirmationEmailMutation = {
  __typename?: 'SendConfirmationEmailMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SendPasswordResetEmailMutation = {
  __typename?: 'SendPasswordResetEmailMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreatePostMutation = {
  __typename?: 'CreatePostMutation';
  post?: Maybe<CreatePostType>;
};

export type CreatePostType = {
  __typename?: 'CreatePostType';
  id?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  content: Scalars['String']['output'];
  timePosted: Scalars['DateTime']['output'];
  event?: Maybe<EventType>;
  likedBy: Array<UserType>;
  comments?: Maybe<Array<Maybe<PostCommentType>>>;
  likes?: Maybe<Scalars['Int']['output']>;
  imageUploadUrl?: Maybe<Scalars['String']['output']>;
};


export type CreatePostTypeCommentsArgs = {
  start?: InputMaybe<Scalars['Int']['input']>;
  end?: InputMaybe<Scalars['Int']['input']>;
};

export type LikePostMutation = {
  __typename?: 'LikePostMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UnlikePostMutation = {
  __typename?: 'UnlikePostMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CommentOnPostMutation = {
  __typename?: 'CommentOnPostMutation';
  comment?: Maybe<PostCommentType>;
};

export type ReplyOnPostCommentMutation = {
  __typename?: 'ReplyOnPostCommentMutation';
  comment?: Maybe<PostCommentType>;
};

export type UpdateProfileLocation = {
  __typename?: 'UpdateProfileLocation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type AlterEventLocation = {
  __typename?: 'AlterEventLocation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SetEventLocation = {
  __typename?: 'SetEventLocation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SetChatNotifications = {
  __typename?: 'SetChatNotifications';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SetChatNickname = {
  __typename?: 'SetChatNickname';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SendChatMessage = {
  __typename?: 'SendChatMessage';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ConfirmMemberParticipationMutation = {
  __typename?: 'ConfirmMemberParticipationMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type FinishEventMutation = {
  __typename?: 'FinishEventMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type RateEventMutation = {
  __typename?: 'RateEventMutation';
  event?: Maybe<EventType>;
};

/** An enumeration. */
export const EventRating = {
  VeryBad: 'VERY_BAD',
  Bad: 'BAD',
  Neutral: 'NEUTRAL',
  Good: 'GOOD',
  Great: 'GREAT'
} as const;

export type EventRating = typeof EventRating[keyof typeof EventRating];
export type LikeEventMemberMutation = {
  __typename?: 'LikeEventMemberMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateSurveyInfoMutation = {
  __typename?: 'UpdateSurveyInfoMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateBasicInfoMutation = {
  __typename?: 'UpdateBasicInfoMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** An enumeration. */
export const Gender = {
  Male: 'MALE',
  Female: 'FEMALE',
  NonBinary: 'NON_BINARY',
  PreferNotToSay: 'PREFER_NOT_TO_SAY'
} as const;

export type Gender = typeof Gender[keyof typeof Gender];
export type UpdateMaxTravelDistanceMutation = {
  __typename?: 'UpdateMaxTravelDistanceMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Subscriptions = {
  __typename?: 'Subscriptions';
  chatMessages?: Maybe<Array<Maybe<WsChatMessageType>>>;
  chatLastOpen?: Maybe<Array<Maybe<WsLastOpenType>>>;
};


export type SubscriptionsChatMessagesArgs = {
  chatId: Scalars['Int']['input'];
};


export type SubscriptionsChatLastOpenArgs = {
  chatId: Scalars['Int']['input'];
};

export type WsChatMessageType = {
  __typename?: 'WSChatMessageType';
  id?: Maybe<Scalars['Int']['output']>;
  timeSent?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  textContent?: Maybe<Scalars['String']['output']>;
  attachmentUrl?: Maybe<Scalars['String']['output']>;
};

export type WsLastOpenType = {
  __typename?: 'WSLastOpenType';
  userId?: Maybe<Scalars['Int']['output']>;
  lastOpen?: Maybe<Scalars['DateTime']['output']>;
};

export type LoginUserMutationVariables = Exact<{
  user: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutationPayload = { __typename?: 'Mutations', login?: { __typename?: 'LoginMutation', myProfile?: { __typename?: 'ProfileType', id?: number | null, username: string, email: string, lastLogin?: Date | null, maxTravelDistance?: number | null, isCapeable: boolean, lastName: string, verified: boolean, likes?: number | null, dislikes?: number | null, friendCount?: number | null, firstName: string, bio: string, dateOfBirth?: Date | null, gender?: string | null, frequencyOfPhysicalActivity?: FrequencyOfPhycicalActivity | null, socialInteractionImportance?: SocialInteractionImportance | null, preferredPartySize?: PreferredPartySize | null, formedRelationshipTypes?: Array<FormedRelationshipsType | null> | null, physicalActivitySatisfaction?: PhysicalActivitySatisfaction | null, preferredPartnerCharacteristics?: Array<PreferredPartnerCharacteristics | null> | null, matchedParticipationLikelihood?: MatchedParticipationLikelihood | null, preferredTimeOfTheDay?: Array<TimeOfTheDay | null> | null, genderPreference?: Array<GenderNoPnts | null> | null, mainInterest?: MainInterest | null, privacySettings: Array<{ __typename?: 'PrivacySettingType', setting?: string | null, scope?: string | null }> } | null } | null };

export type SignupUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type SignupUserMutationPayload = { __typename?: 'Mutations', signup?: { __typename?: 'SignupMutation', myProfile?: { __typename?: 'ProfileType', id?: number | null, username: string, email: string, lastLogin?: Date | null, maxTravelDistance?: number | null, isCapeable: boolean, lastName: string, verified: boolean, likes?: number | null, dislikes?: number | null, friendCount?: number | null, firstName: string, bio: string, dateOfBirth?: Date | null, gender?: string | null, frequencyOfPhysicalActivity?: FrequencyOfPhycicalActivity | null, socialInteractionImportance?: SocialInteractionImportance | null, preferredPartySize?: PreferredPartySize | null, formedRelationshipTypes?: Array<FormedRelationshipsType | null> | null, physicalActivitySatisfaction?: PhysicalActivitySatisfaction | null, preferredPartnerCharacteristics?: Array<PreferredPartnerCharacteristics | null> | null, matchedParticipationLikelihood?: MatchedParticipationLikelihood | null, preferredTimeOfTheDay?: Array<TimeOfTheDay | null> | null, genderPreference?: Array<GenderNoPnts | null> | null, mainInterest?: MainInterest | null, privacySettings: Array<{ __typename?: 'PrivacySettingType', setting?: string | null, scope?: string | null }> } | null } | null };

export type CreateNewEventMutationVariables = Exact<{
  title: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  startTime: Scalars['DateTime']['input'];
  endTime: Scalars['DateTime']['input'];
  requrements?: InputMaybe<Scalars['String']['input']>;
  locationLongitude?: InputMaybe<Scalars['Float']['input']>;
  locationLatitude?: InputMaybe<Scalars['Float']['input']>;
  activity: Activity;
  skillLevel: SkillLevel;
  maxParticipants?: InputMaybe<Scalars['Int']['input']>;
  allowSpectators?: InputMaybe<Scalars['Boolean']['input']>;
  minAge?: InputMaybe<Scalars['Int']['input']>;
  maxAge?: InputMaybe<Scalars['Int']['input']>;
  acceptedGenders?: InputMaybe<Array<GenderNoPnts> | GenderNoPnts>;
}>;


export type CreateNewEventMutationPayload = { __typename?: 'Mutations', createEvent?: { __typename?: 'CreateEventMutation', event?: { __typename?: 'EventType', id?: number | null } | null } | null };

export type JoinEventMutationVariables = Exact<{
  eventId: Scalars['Int']['input'];
}>;


export type JoinEventMutationPayload = { __typename?: 'Mutations', joinEvent?: { __typename?: 'JoinEventMutation', success?: boolean | null } | null };

export type LeaveEventMutationVariables = Exact<{
  eventId: Scalars['Int']['input'];
}>;


export type LeaveEventMutationPayload = { __typename?: 'Mutations', leaveEvent?: { __typename?: 'LeaveEventMutation', success?: boolean | null } | null };

export type CancelEventMutationVariables = Exact<{
  eventId: Scalars['Int']['input'];
}>;


export type CancelEventMutationPayload = { __typename?: 'Mutations', deleteEvent?: { __typename?: 'DeleteEventMutation', success?: boolean | null } | null };

export type CreatePostMutationVariables = Exact<{
  eventId: Scalars['Int']['input'];
  title: Scalars['String']['input'];
  content: Scalars['String']['input'];
}>;


export type CreatePostMutationPayload = { __typename?: 'Mutations', createPost?: { __typename?: 'CreatePostMutation', post?: { __typename?: 'CreatePostType', imageUploadUrl?: string | null } | null } | null };

export type UpdateLocationMutationVariables = Exact<{
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
}>;


export type UpdateLocationMutationPayload = { __typename?: 'Mutations', updateProfileLocation?: { __typename?: 'UpdateProfileLocation', success?: boolean | null } | null };

export type UpdateProfileBasicInfoMutationVariables = Exact<{
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  gender?: InputMaybe<Gender>;
}>;


export type UpdateProfileBasicInfoMutationPayload = { __typename?: 'Mutations', updateBasicInfo?: { __typename?: 'UpdateBasicInfoMutation', success?: boolean | null } | null };

export type UpdateProfileSurveyInfoMutationVariables = Exact<{
  frequencyOfPhysicalActivity?: InputMaybe<FrequencyOfPhycicalActivity>;
  socialInteractionImportance?: InputMaybe<SocialInteractionImportance>;
  preferredPartySize?: InputMaybe<PreferredPartySize>;
  formedRelationshipTypes?: InputMaybe<Array<InputMaybe<FormedRelationshipsType>> | InputMaybe<FormedRelationshipsType>>;
  physicalActivitySatisfaction?: InputMaybe<PhysicalActivitySatisfaction>;
  preferredPartnerCharacteristics?: InputMaybe<Array<InputMaybe<PreferredPartnerCharacteristics>> | InputMaybe<PreferredPartnerCharacteristics>>;
  matchedParticipationLikelihood?: InputMaybe<MatchedParticipationLikelihood>;
  genderPreference?: InputMaybe<Array<InputMaybe<GenderNoPnts>> | InputMaybe<GenderNoPnts>>;
  mainInterest?: InputMaybe<MainInterest>;
  preferredTimeOfTheDay?: InputMaybe<Array<InputMaybe<TimeOfTheDay>> | InputMaybe<TimeOfTheDay>>;
}>;


export type UpdateProfileSurveyInfoMutationPayload = { __typename?: 'Mutations', updateSurveyInfo?: { __typename?: 'UpdateSurveyInfoMutation', success?: boolean | null } | null };

export type UpdateAllPrivacySettingsMutationVariables = Exact<{
  scope: PrivacyScope;
}>;


export type UpdateAllPrivacySettingsMutationPayload = { __typename?: 'Mutations', updateAllPrivacySettings?: { __typename?: 'UpdateAllPrviacySettingsMutation', success?: boolean | null } | null };

export type EventMemberFragment = { __typename?: 'EventMemberType', role?: string | null, user: { __typename?: 'UserType', id?: number | null, username: string, firstName: string, lastName: string } };

export type EventPostFragment = { __typename?: 'PostType', id?: number | null, title: string, content: string, timePosted: Date, likes?: number | null };

export type EventOrganizerFragment = { __typename?: 'EventMemberType', user: { __typename?: 'UserType', id?: number | null, username: string, firstName: string, lastName: string } };

export type EventFragment = { __typename?: 'EventType', id?: number | null, title: string, description?: string | null, startTime: Date, endTime: Date, skillLevel?: string | null, maxParticipants?: number | null, allowSpectators: boolean, acceptedGenders?: any | null, minAge?: number | null, maxAge?: number | null, finished: boolean, role?: MemberRole | null, location: { __typename?: 'LocationType', longitude: number, latitude: number }, activity: { __typename?: 'ActivityType', id?: number | null, name?: string | null }, organizer?: { __typename?: 'EventMemberType', user: { __typename?: 'UserType', id?: number | null, username: string, firstName: string, lastName: string } } | null, members: Array<{ __typename?: 'EventMemberType', role?: string | null, user: { __typename?: 'UserType', id?: number | null, username: string, firstName: string, lastName: string } }>, posts: Array<{ __typename?: 'PostType', id?: number | null, title: string, content: string, timePosted: Date, likes?: number | null }> };

export type UsernameTakenQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type UsernameTakenQueryPayload = { __typename?: 'Queries', usernameTaken: boolean };

export type EmailTakenQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type EmailTakenQueryPayload = { __typename?: 'Queries', emailTaken: boolean };

export type SurveyFragment = { __typename?: 'ProfileType', frequencyOfPhysicalActivity?: FrequencyOfPhycicalActivity | null, socialInteractionImportance?: SocialInteractionImportance | null, preferredPartySize?: PreferredPartySize | null, formedRelationshipTypes?: Array<FormedRelationshipsType | null> | null, physicalActivitySatisfaction?: PhysicalActivitySatisfaction | null, preferredPartnerCharacteristics?: Array<PreferredPartnerCharacteristics | null> | null, matchedParticipationLikelihood?: MatchedParticipationLikelihood | null, preferredTimeOfTheDay?: Array<TimeOfTheDay | null> | null, genderPreference?: Array<GenderNoPnts | null> | null, mainInterest?: MainInterest | null };

export type BasicInfoFragment = { __typename?: 'ProfileType', firstName: string, lastName: string, bio: string, dateOfBirth?: Date | null, gender?: string | null };

export type ContextProfileFragment = { __typename?: 'ProfileType', id?: number | null, username: string, email: string, lastLogin?: Date | null, maxTravelDistance?: number | null, isCapeable: boolean, lastName: string, verified: boolean, likes?: number | null, dislikes?: number | null, friendCount?: number | null, firstName: string, bio: string, dateOfBirth?: Date | null, gender?: string | null, frequencyOfPhysicalActivity?: FrequencyOfPhycicalActivity | null, socialInteractionImportance?: SocialInteractionImportance | null, preferredPartySize?: PreferredPartySize | null, formedRelationshipTypes?: Array<FormedRelationshipsType | null> | null, physicalActivitySatisfaction?: PhysicalActivitySatisfaction | null, preferredPartnerCharacteristics?: Array<PreferredPartnerCharacteristics | null> | null, matchedParticipationLikelihood?: MatchedParticipationLikelihood | null, preferredTimeOfTheDay?: Array<TimeOfTheDay | null> | null, genderPreference?: Array<GenderNoPnts | null> | null, mainInterest?: MainInterest | null, privacySettings: Array<{ __typename?: 'PrivacySettingType', setting?: string | null, scope?: string | null }> };

export type UserFragment = { __typename?: 'UserType', id?: number | null, username: string, bio: string, gender?: MainAppUserGenderChoices | null, firstName: string, lastName: string, likes?: number | null, dislikes?: number | null, dateOfBirth?: Date | null, friendCount?: number | null, relationship?: { __typename?: 'RelationshipType', status?: string | null, chat?: { __typename?: 'ChatType', id?: number | null } | null } | null };

export type GetEventQueryVariables = Exact<{
  eventId: Scalars['Int']['input'];
}>;


export type GetEventQueryPayload = { __typename?: 'Queries', event?: { __typename?: 'EventType', id?: number | null, title: string, description?: string | null, startTime: Date, endTime: Date, skillLevel?: string | null, maxParticipants?: number | null, allowSpectators: boolean, acceptedGenders?: any | null, minAge?: number | null, maxAge?: number | null, finished: boolean, role?: MemberRole | null, location: { __typename?: 'LocationType', longitude: number, latitude: number }, activity: { __typename?: 'ActivityType', id?: number | null, name?: string | null }, organizer?: { __typename?: 'EventMemberType', user: { __typename?: 'UserType', id?: number | null, username: string, firstName: string, lastName: string } } | null, members: Array<{ __typename?: 'EventMemberType', role?: string | null, user: { __typename?: 'UserType', id?: number | null, username: string, firstName: string, lastName: string } }>, posts: Array<{ __typename?: 'PostType', id?: number | null, title: string, content: string, timePosted: Date, likes?: number | null }> } | null };

export type GetUserQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type GetUserQueryPayload = { __typename?: 'Queries', user?: { __typename?: 'UserType', id?: number | null, username: string, bio: string, gender?: MainAppUserGenderChoices | null, firstName: string, lastName: string, likes?: number | null, dislikes?: number | null, dateOfBirth?: Date | null, friendCount?: number | null, relationship?: { __typename?: 'RelationshipType', status?: string | null, chat?: { __typename?: 'ChatType', id?: number | null } | null } | null } | null };

export type FetchProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchProfileQueryPayload = { __typename?: 'Queries', myProfile?: { __typename?: 'ProfileType', id?: number | null, username: string, email: string, lastLogin?: Date | null, maxTravelDistance?: number | null, isCapeable: boolean, lastName: string, verified: boolean, likes?: number | null, dislikes?: number | null, friendCount?: number | null, firstName: string, bio: string, dateOfBirth?: Date | null, gender?: string | null, frequencyOfPhysicalActivity?: FrequencyOfPhycicalActivity | null, socialInteractionImportance?: SocialInteractionImportance | null, preferredPartySize?: PreferredPartySize | null, formedRelationshipTypes?: Array<FormedRelationshipsType | null> | null, physicalActivitySatisfaction?: PhysicalActivitySatisfaction | null, preferredPartnerCharacteristics?: Array<PreferredPartnerCharacteristics | null> | null, matchedParticipationLikelihood?: MatchedParticipationLikelihood | null, preferredTimeOfTheDay?: Array<TimeOfTheDay | null> | null, genderPreference?: Array<GenderNoPnts | null> | null, mainInterest?: MainInterest | null, privacySettings: Array<{ __typename?: 'PrivacySettingType', setting?: string | null, scope?: string | null }> } | null };

export type GetProfilePictureUploadUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfilePictureUploadUrlQueryPayload = { __typename?: 'Queries', profilePictureGcloudUrl?: string | null };

export const EventOrganizerFragmentDoc = gql`
    fragment EventOrganizerFragment on EventMemberType {
  user {
    id
    username
    firstName
    lastName
  }
}
    `;
export const EventMemberFragmentDoc = gql`
    fragment EventMemberFragment on EventMemberType {
  role
  user {
    id
    username
    firstName
    lastName
  }
}
    `;
export const EventPostFragmentDoc = gql`
    fragment EventPostFragment on PostType {
  id
  title
  content
  timePosted
  likes
}
    `;
export const EventFragmentDoc = gql`
    fragment EventFragment on EventType {
  id
  title
  description
  startTime
  endTime
  location {
    longitude
    latitude
  }
  activity {
    id
    name
  }
  skillLevel
  maxParticipants
  allowSpectators
  acceptedGenders
  minAge
  maxAge
  organizer {
    ...EventOrganizerFragment
  }
  members {
    ...EventMemberFragment
  }
  posts {
    ...EventPostFragment
  }
  finished
  role
}
    ${EventOrganizerFragmentDoc}
${EventMemberFragmentDoc}
${EventPostFragmentDoc}`;
export const BasicInfoFragmentDoc = gql`
    fragment BasicInfoFragment on ProfileType {
  firstName
  lastName
  bio
  dateOfBirth
  gender
}
    `;
export const SurveyFragmentDoc = gql`
    fragment SurveyFragment on ProfileType {
  frequencyOfPhysicalActivity
  socialInteractionImportance
  preferredPartySize
  formedRelationshipTypes
  physicalActivitySatisfaction
  preferredPartnerCharacteristics
  matchedParticipationLikelihood
  preferredTimeOfTheDay
  genderPreference
  mainInterest
}
    `;
export const ContextProfileFragmentDoc = gql`
    fragment ContextProfileFragment on ProfileType {
  id
  username
  email
  lastLogin
  maxTravelDistance
  isCapeable
  lastName
  verified
  likes
  dislikes
  friendCount
  ...BasicInfoFragment
  ...SurveyFragment
  privacySettings {
    setting
    scope
  }
}
    ${BasicInfoFragmentDoc}
${SurveyFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment UserFragment on UserType {
  id
  username
  bio
  gender
  firstName
  lastName
  likes
  dislikes
  dateOfBirth
  friendCount
  relationship {
    status
    chat {
      id
    }
  }
}
    `;
export const LoginUserDocument = gql`
    mutation LoginUser($user: String!, $password: String!) {
  login(user: $user, password: $password) {
    myProfile {
      ...ContextProfileFragment
    }
  }
}
    ${ContextProfileFragmentDoc}`;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutationPayload, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutationPayload, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutationPayload, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutationPayload>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutationPayload, LoginUserMutationVariables>;
export const SignupUserDocument = gql`
    mutation SignupUser($username: String!, $password: String!, $email: String!) {
  signup(username: $username, email: $email, password: $password) {
    myProfile {
      ...ContextProfileFragment
    }
  }
}
    ${ContextProfileFragmentDoc}`;
export type SignupUserMutationFn = Apollo.MutationFunction<SignupUserMutationPayload, SignupUserMutationVariables>;

/**
 * __useSignupUserMutation__
 *
 * To run a mutation, you first call `useSignupUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupUserMutation, { data, loading, error }] = useSignupUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSignupUserMutation(baseOptions?: Apollo.MutationHookOptions<SignupUserMutationPayload, SignupUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupUserMutationPayload, SignupUserMutationVariables>(SignupUserDocument, options);
      }
export type SignupUserMutationHookResult = ReturnType<typeof useSignupUserMutation>;
export type SignupUserMutationResult = Apollo.MutationResult<SignupUserMutationPayload>;
export type SignupUserMutationOptions = Apollo.BaseMutationOptions<SignupUserMutationPayload, SignupUserMutationVariables>;
export const CreateNewEventMutationDocument = gql`
    mutation CreateNewEventMutation($title: String!, $description: String, $startTime: DateTime!, $endTime: DateTime!, $requrements: String, $locationLongitude: Float, $locationLatitude: Float, $activity: Activity!, $skillLevel: SkillLevel!, $maxParticipants: Int, $allowSpectators: Boolean, $minAge: Int, $maxAge: Int, $acceptedGenders: [GenderNoPNTS!]) {
  createEvent(
    title: $title
    description: $description
    startTime: $startTime
    endTime: $endTime
    requrements: $requrements
    locationLongitude: $locationLongitude
    locationLatitude: $locationLatitude
    activity: $activity
    skillLevel: $skillLevel
    maxParticipants: $maxParticipants
    allowSpectators: $allowSpectators
    minAge: $minAge
    maxAge: $maxAge
    acceptedGenders: $acceptedGenders
  ) {
    event {
      id
    }
  }
}
    `;
export type CreateNewEventMutationMutationFn = Apollo.MutationFunction<CreateNewEventMutationPayload, CreateNewEventMutationVariables>;

/**
 * __useCreateNewEventMutation__
 *
 * To run a mutation, you first call `useCreateNewEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewEventMutation, { data, loading, error }] = useCreateNewEventMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      startTime: // value for 'startTime'
 *      endTime: // value for 'endTime'
 *      requrements: // value for 'requrements'
 *      locationLongitude: // value for 'locationLongitude'
 *      locationLatitude: // value for 'locationLatitude'
 *      activity: // value for 'activity'
 *      skillLevel: // value for 'skillLevel'
 *      maxParticipants: // value for 'maxParticipants'
 *      allowSpectators: // value for 'allowSpectators'
 *      minAge: // value for 'minAge'
 *      maxAge: // value for 'maxAge'
 *      acceptedGenders: // value for 'acceptedGenders'
 *   },
 * });
 */
export function useCreateNewEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewEventMutationPayload, CreateNewEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewEventMutationPayload, CreateNewEventMutationVariables>(CreateNewEventMutationDocument, options);
      }
export type CreateNewEventMutationHookResult = ReturnType<typeof useCreateNewEventMutation>;
export type CreateNewEventMutationMutationResult = Apollo.MutationResult<CreateNewEventMutationPayload>;
export type CreateNewEventMutationMutationOptions = Apollo.BaseMutationOptions<CreateNewEventMutationPayload, CreateNewEventMutationVariables>;
export const JoinEventMutationDocument = gql`
    mutation JoinEventMutation($eventId: Int!) {
  joinEvent(eventId: $eventId) {
    success
  }
}
    `;
export type JoinEventMutationMutationFn = Apollo.MutationFunction<JoinEventMutationPayload, JoinEventMutationVariables>;

/**
 * __useJoinEventMutation__
 *
 * To run a mutation, you first call `useJoinEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinEventMutation, { data, loading, error }] = useJoinEventMutation({
 *   variables: {
 *      eventId: // value for 'eventId'
 *   },
 * });
 */
export function useJoinEventMutation(baseOptions?: Apollo.MutationHookOptions<JoinEventMutationPayload, JoinEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinEventMutationPayload, JoinEventMutationVariables>(JoinEventMutationDocument, options);
      }
export type JoinEventMutationHookResult = ReturnType<typeof useJoinEventMutation>;
export type JoinEventMutationMutationResult = Apollo.MutationResult<JoinEventMutationPayload>;
export type JoinEventMutationMutationOptions = Apollo.BaseMutationOptions<JoinEventMutationPayload, JoinEventMutationVariables>;
export const LeaveEventMutationDocument = gql`
    mutation LeaveEventMutation($eventId: Int!) {
  leaveEvent(eventId: $eventId) {
    success
  }
}
    `;
export type LeaveEventMutationMutationFn = Apollo.MutationFunction<LeaveEventMutationPayload, LeaveEventMutationVariables>;

/**
 * __useLeaveEventMutation__
 *
 * To run a mutation, you first call `useLeaveEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLeaveEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [leaveEventMutation, { data, loading, error }] = useLeaveEventMutation({
 *   variables: {
 *      eventId: // value for 'eventId'
 *   },
 * });
 */
export function useLeaveEventMutation(baseOptions?: Apollo.MutationHookOptions<LeaveEventMutationPayload, LeaveEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LeaveEventMutationPayload, LeaveEventMutationVariables>(LeaveEventMutationDocument, options);
      }
export type LeaveEventMutationHookResult = ReturnType<typeof useLeaveEventMutation>;
export type LeaveEventMutationMutationResult = Apollo.MutationResult<LeaveEventMutationPayload>;
export type LeaveEventMutationMutationOptions = Apollo.BaseMutationOptions<LeaveEventMutationPayload, LeaveEventMutationVariables>;
export const CancelEventMutationDocument = gql`
    mutation CancelEventMutation($eventId: Int!) {
  deleteEvent(eventId: $eventId) {
    success
  }
}
    `;
export type CancelEventMutationMutationFn = Apollo.MutationFunction<CancelEventMutationPayload, CancelEventMutationVariables>;

/**
 * __useCancelEventMutation__
 *
 * To run a mutation, you first call `useCancelEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelEventMutation, { data, loading, error }] = useCancelEventMutation({
 *   variables: {
 *      eventId: // value for 'eventId'
 *   },
 * });
 */
export function useCancelEventMutation(baseOptions?: Apollo.MutationHookOptions<CancelEventMutationPayload, CancelEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelEventMutationPayload, CancelEventMutationVariables>(CancelEventMutationDocument, options);
      }
export type CancelEventMutationHookResult = ReturnType<typeof useCancelEventMutation>;
export type CancelEventMutationMutationResult = Apollo.MutationResult<CancelEventMutationPayload>;
export type CancelEventMutationMutationOptions = Apollo.BaseMutationOptions<CancelEventMutationPayload, CancelEventMutationVariables>;
export const CreatePostMutationDocument = gql`
    mutation CreatePostMutation($eventId: Int!, $title: String!, $content: String!) {
  createPost(eventId: $eventId, title: $title, content: $content) {
    post {
      imageUploadUrl
    }
  }
}
    `;
export type CreatePostMutationMutationFn = Apollo.MutationFunction<CreatePostMutationPayload, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      eventId: // value for 'eventId'
 *      title: // value for 'title'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutationPayload, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutationPayload, CreatePostMutationVariables>(CreatePostMutationDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationMutationResult = Apollo.MutationResult<CreatePostMutationPayload>;
export type CreatePostMutationMutationOptions = Apollo.BaseMutationOptions<CreatePostMutationPayload, CreatePostMutationVariables>;
export const UpdateLocationDocument = gql`
    mutation UpdateLocation($latitude: Float!, $longitude: Float!) {
  updateProfileLocation(latitude: $latitude, longitude: $longitude) {
    success
  }
}
    `;
export type UpdateLocationMutationFn = Apollo.MutationFunction<UpdateLocationMutationPayload, UpdateLocationMutationVariables>;

/**
 * __useUpdateLocationMutation__
 *
 * To run a mutation, you first call `useUpdateLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLocationMutation, { data, loading, error }] = useUpdateLocationMutation({
 *   variables: {
 *      latitude: // value for 'latitude'
 *      longitude: // value for 'longitude'
 *   },
 * });
 */
export function useUpdateLocationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLocationMutationPayload, UpdateLocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLocationMutationPayload, UpdateLocationMutationVariables>(UpdateLocationDocument, options);
      }
export type UpdateLocationMutationHookResult = ReturnType<typeof useUpdateLocationMutation>;
export type UpdateLocationMutationResult = Apollo.MutationResult<UpdateLocationMutationPayload>;
export type UpdateLocationMutationOptions = Apollo.BaseMutationOptions<UpdateLocationMutationPayload, UpdateLocationMutationVariables>;
export const UpdateProfileBasicInfoDocument = gql`
    mutation UpdateProfileBasicInfo($firstName: String, $lastName: String, $bio: String, $dateOfBirth: Date, $gender: Gender) {
  updateBasicInfo(
    firstName: $firstName
    lastName: $lastName
    bio: $bio
    dateOfBirth: $dateOfBirth
    gender: $gender
  ) {
    success
  }
}
    `;
export type UpdateProfileBasicInfoMutationFn = Apollo.MutationFunction<UpdateProfileBasicInfoMutationPayload, UpdateProfileBasicInfoMutationVariables>;

/**
 * __useUpdateProfileBasicInfoMutation__
 *
 * To run a mutation, you first call `useUpdateProfileBasicInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileBasicInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileBasicInfoMutation, { data, loading, error }] = useUpdateProfileBasicInfoMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      bio: // value for 'bio'
 *      dateOfBirth: // value for 'dateOfBirth'
 *      gender: // value for 'gender'
 *   },
 * });
 */
export function useUpdateProfileBasicInfoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileBasicInfoMutationPayload, UpdateProfileBasicInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileBasicInfoMutationPayload, UpdateProfileBasicInfoMutationVariables>(UpdateProfileBasicInfoDocument, options);
      }
export type UpdateProfileBasicInfoMutationHookResult = ReturnType<typeof useUpdateProfileBasicInfoMutation>;
export type UpdateProfileBasicInfoMutationResult = Apollo.MutationResult<UpdateProfileBasicInfoMutationPayload>;
export type UpdateProfileBasicInfoMutationOptions = Apollo.BaseMutationOptions<UpdateProfileBasicInfoMutationPayload, UpdateProfileBasicInfoMutationVariables>;
export const UpdateProfileSurveyInfoDocument = gql`
    mutation UpdateProfileSurveyInfo($frequencyOfPhysicalActivity: FrequencyOfPhycicalActivity, $socialInteractionImportance: SocialInteractionImportance, $preferredPartySize: PreferredPartySize, $formedRelationshipTypes: [FormedRelationshipsType], $physicalActivitySatisfaction: PhysicalActivitySatisfaction, $preferredPartnerCharacteristics: [PreferredPartnerCharacteristics], $matchedParticipationLikelihood: MatchedParticipationLikelihood, $genderPreference: [GenderNoPNTS], $mainInterest: MainInterest, $preferredTimeOfTheDay: [TimeOfTheDay]) {
  updateSurveyInfo(
    frequencyOfPhysicalActivity: $frequencyOfPhysicalActivity
    socialInteractionImportance: $socialInteractionImportance
    preferredPartySize: $preferredPartySize
    formedRelationshipTypes: $formedRelationshipTypes
    physicalActivitySatisfaction: $physicalActivitySatisfaction
    preferredPartnerCharacteristics: $preferredPartnerCharacteristics
    matchedParticipationLikelihood: $matchedParticipationLikelihood
    genderPreference: $genderPreference
    mainInterest: $mainInterest
    preferredTimeOfTheDay: $preferredTimeOfTheDay
  ) {
    success
  }
}
    `;
export type UpdateProfileSurveyInfoMutationFn = Apollo.MutationFunction<UpdateProfileSurveyInfoMutationPayload, UpdateProfileSurveyInfoMutationVariables>;

/**
 * __useUpdateProfileSurveyInfoMutation__
 *
 * To run a mutation, you first call `useUpdateProfileSurveyInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileSurveyInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileSurveyInfoMutation, { data, loading, error }] = useUpdateProfileSurveyInfoMutation({
 *   variables: {
 *      frequencyOfPhysicalActivity: // value for 'frequencyOfPhysicalActivity'
 *      socialInteractionImportance: // value for 'socialInteractionImportance'
 *      preferredPartySize: // value for 'preferredPartySize'
 *      formedRelationshipTypes: // value for 'formedRelationshipTypes'
 *      physicalActivitySatisfaction: // value for 'physicalActivitySatisfaction'
 *      preferredPartnerCharacteristics: // value for 'preferredPartnerCharacteristics'
 *      matchedParticipationLikelihood: // value for 'matchedParticipationLikelihood'
 *      genderPreference: // value for 'genderPreference'
 *      mainInterest: // value for 'mainInterest'
 *      preferredTimeOfTheDay: // value for 'preferredTimeOfTheDay'
 *   },
 * });
 */
export function useUpdateProfileSurveyInfoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileSurveyInfoMutationPayload, UpdateProfileSurveyInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileSurveyInfoMutationPayload, UpdateProfileSurveyInfoMutationVariables>(UpdateProfileSurveyInfoDocument, options);
      }
export type UpdateProfileSurveyInfoMutationHookResult = ReturnType<typeof useUpdateProfileSurveyInfoMutation>;
export type UpdateProfileSurveyInfoMutationResult = Apollo.MutationResult<UpdateProfileSurveyInfoMutationPayload>;
export type UpdateProfileSurveyInfoMutationOptions = Apollo.BaseMutationOptions<UpdateProfileSurveyInfoMutationPayload, UpdateProfileSurveyInfoMutationVariables>;
export const UpdateAllPrivacySettingsDocument = gql`
    mutation UpdateAllPrivacySettings($scope: PrivacyScope!) {
  updateAllPrivacySettings(scope: $scope) {
    success
  }
}
    `;
export type UpdateAllPrivacySettingsMutationFn = Apollo.MutationFunction<UpdateAllPrivacySettingsMutationPayload, UpdateAllPrivacySettingsMutationVariables>;

/**
 * __useUpdateAllPrivacySettingsMutation__
 *
 * To run a mutation, you first call `useUpdateAllPrivacySettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAllPrivacySettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAllPrivacySettingsMutation, { data, loading, error }] = useUpdateAllPrivacySettingsMutation({
 *   variables: {
 *      scope: // value for 'scope'
 *   },
 * });
 */
export function useUpdateAllPrivacySettingsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAllPrivacySettingsMutationPayload, UpdateAllPrivacySettingsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAllPrivacySettingsMutationPayload, UpdateAllPrivacySettingsMutationVariables>(UpdateAllPrivacySettingsDocument, options);
      }
export type UpdateAllPrivacySettingsMutationHookResult = ReturnType<typeof useUpdateAllPrivacySettingsMutation>;
export type UpdateAllPrivacySettingsMutationResult = Apollo.MutationResult<UpdateAllPrivacySettingsMutationPayload>;
export type UpdateAllPrivacySettingsMutationOptions = Apollo.BaseMutationOptions<UpdateAllPrivacySettingsMutationPayload, UpdateAllPrivacySettingsMutationVariables>;
export const UsernameTakenDocument = gql`
    query usernameTaken($username: String!) {
  usernameTaken(username: $username)
}
    `;

/**
 * __useUsernameTakenQuery__
 *
 * To run a query within a React component, call `useUsernameTakenQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsernameTakenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsernameTakenQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUsernameTakenQuery(baseOptions: Apollo.QueryHookOptions<UsernameTakenQueryPayload, UsernameTakenQueryVariables> & ({ variables: UsernameTakenQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsernameTakenQueryPayload, UsernameTakenQueryVariables>(UsernameTakenDocument, options);
      }
export function useUsernameTakenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsernameTakenQueryPayload, UsernameTakenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsernameTakenQueryPayload, UsernameTakenQueryVariables>(UsernameTakenDocument, options);
        }
export function useUsernameTakenSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UsernameTakenQueryPayload, UsernameTakenQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UsernameTakenQueryPayload, UsernameTakenQueryVariables>(UsernameTakenDocument, options);
        }
export type UsernameTakenQueryHookResult = ReturnType<typeof useUsernameTakenQuery>;
export type UsernameTakenLazyQueryHookResult = ReturnType<typeof useUsernameTakenLazyQuery>;
export type UsernameTakenSuspenseQueryHookResult = ReturnType<typeof useUsernameTakenSuspenseQuery>;
export type UsernameTakenQueryResult = Apollo.QueryResult<UsernameTakenQueryPayload, UsernameTakenQueryVariables>;
export const EmailTakenDocument = gql`
    query emailTaken($email: String!) {
  emailTaken(email: $email)
}
    `;

/**
 * __useEmailTakenQuery__
 *
 * To run a query within a React component, call `useEmailTakenQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmailTakenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmailTakenQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useEmailTakenQuery(baseOptions: Apollo.QueryHookOptions<EmailTakenQueryPayload, EmailTakenQueryVariables> & ({ variables: EmailTakenQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmailTakenQueryPayload, EmailTakenQueryVariables>(EmailTakenDocument, options);
      }
export function useEmailTakenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmailTakenQueryPayload, EmailTakenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmailTakenQueryPayload, EmailTakenQueryVariables>(EmailTakenDocument, options);
        }
export function useEmailTakenSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<EmailTakenQueryPayload, EmailTakenQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<EmailTakenQueryPayload, EmailTakenQueryVariables>(EmailTakenDocument, options);
        }
export type EmailTakenQueryHookResult = ReturnType<typeof useEmailTakenQuery>;
export type EmailTakenLazyQueryHookResult = ReturnType<typeof useEmailTakenLazyQuery>;
export type EmailTakenSuspenseQueryHookResult = ReturnType<typeof useEmailTakenSuspenseQuery>;
export type EmailTakenQueryResult = Apollo.QueryResult<EmailTakenQueryPayload, EmailTakenQueryVariables>;
export const GetEventDocument = gql`
    query GetEvent($eventId: Int!) {
  event(id: $eventId) {
    ...EventFragment
  }
}
    ${EventFragmentDoc}`;

/**
 * __useGetEventQuery__
 *
 * To run a query within a React component, call `useGetEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventQuery({
 *   variables: {
 *      eventId: // value for 'eventId'
 *   },
 * });
 */
export function useGetEventQuery(baseOptions: Apollo.QueryHookOptions<GetEventQueryPayload, GetEventQueryVariables> & ({ variables: GetEventQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventQueryPayload, GetEventQueryVariables>(GetEventDocument, options);
      }
export function useGetEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventQueryPayload, GetEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventQueryPayload, GetEventQueryVariables>(GetEventDocument, options);
        }
export function useGetEventSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetEventQueryPayload, GetEventQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEventQueryPayload, GetEventQueryVariables>(GetEventDocument, options);
        }
export type GetEventQueryHookResult = ReturnType<typeof useGetEventQuery>;
export type GetEventLazyQueryHookResult = ReturnType<typeof useGetEventLazyQuery>;
export type GetEventSuspenseQueryHookResult = ReturnType<typeof useGetEventSuspenseQuery>;
export type GetEventQueryResult = Apollo.QueryResult<GetEventQueryPayload, GetEventQueryVariables>;
export const GetUserQueryDocument = gql`
    query GetUserQuery($userId: Int!) {
  user(id: $userId) {
    ...UserFragment
  }
}
    ${UserFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQueryPayload, GetUserQueryVariables> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQueryPayload, GetUserQueryVariables>(GetUserQueryDocument, options);
      }
export function useGetUserQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQueryPayload, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQueryPayload, GetUserQueryVariables>(GetUserQueryDocument, options);
        }
export function useGetUserQuerySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserQueryPayload, GetUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQueryPayload, GetUserQueryVariables>(GetUserQueryDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserQueryLazyQueryHookResult = ReturnType<typeof useGetUserQueryLazyQuery>;
export type GetUserQuerySuspenseQueryHookResult = ReturnType<typeof useGetUserQuerySuspenseQuery>;
export type GetUserQueryQueryResult = Apollo.QueryResult<GetUserQueryPayload, GetUserQueryVariables>;
export const FetchProfileDocument = gql`
    query FetchProfile {
  myProfile {
    ...ContextProfileFragment
  }
}
    ${ContextProfileFragmentDoc}`;

/**
 * __useFetchProfileQuery__
 *
 * To run a query within a React component, call `useFetchProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchProfileQuery(baseOptions?: Apollo.QueryHookOptions<FetchProfileQueryPayload, FetchProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchProfileQueryPayload, FetchProfileQueryVariables>(FetchProfileDocument, options);
      }
export function useFetchProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchProfileQueryPayload, FetchProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchProfileQueryPayload, FetchProfileQueryVariables>(FetchProfileDocument, options);
        }
export function useFetchProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FetchProfileQueryPayload, FetchProfileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FetchProfileQueryPayload, FetchProfileQueryVariables>(FetchProfileDocument, options);
        }
export type FetchProfileQueryHookResult = ReturnType<typeof useFetchProfileQuery>;
export type FetchProfileLazyQueryHookResult = ReturnType<typeof useFetchProfileLazyQuery>;
export type FetchProfileSuspenseQueryHookResult = ReturnType<typeof useFetchProfileSuspenseQuery>;
export type FetchProfileQueryResult = Apollo.QueryResult<FetchProfileQueryPayload, FetchProfileQueryVariables>;
export const GetProfilePictureUploadUrlDocument = gql`
    query GetProfilePictureUploadURL {
  profilePictureGcloudUrl
}
    `;

/**
 * __useGetProfilePictureUploadUrlQuery__
 *
 * To run a query within a React component, call `useGetProfilePictureUploadUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfilePictureUploadUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfilePictureUploadUrlQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfilePictureUploadUrlQuery(baseOptions?: Apollo.QueryHookOptions<GetProfilePictureUploadUrlQueryPayload, GetProfilePictureUploadUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfilePictureUploadUrlQueryPayload, GetProfilePictureUploadUrlQueryVariables>(GetProfilePictureUploadUrlDocument, options);
      }
export function useGetProfilePictureUploadUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfilePictureUploadUrlQueryPayload, GetProfilePictureUploadUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfilePictureUploadUrlQueryPayload, GetProfilePictureUploadUrlQueryVariables>(GetProfilePictureUploadUrlDocument, options);
        }
export function useGetProfilePictureUploadUrlSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProfilePictureUploadUrlQueryPayload, GetProfilePictureUploadUrlQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfilePictureUploadUrlQueryPayload, GetProfilePictureUploadUrlQueryVariables>(GetProfilePictureUploadUrlDocument, options);
        }
export type GetProfilePictureUploadUrlQueryHookResult = ReturnType<typeof useGetProfilePictureUploadUrlQuery>;
export type GetProfilePictureUploadUrlLazyQueryHookResult = ReturnType<typeof useGetProfilePictureUploadUrlLazyQuery>;
export type GetProfilePictureUploadUrlSuspenseQueryHookResult = ReturnType<typeof useGetProfilePictureUploadUrlSuspenseQuery>;
export type GetProfilePictureUploadUrlQueryResult = Apollo.QueryResult<GetProfilePictureUploadUrlQueryPayload, GetProfilePictureUploadUrlQueryVariables>;