export interface Recommendation {
  item_list: RecommendationItemList[];
  total: number;
}

export interface RecommendationItemList {
  type: CARDTYPEEnum;
  item_entity: RecommendationItemEntity;
}

export interface RecommendationItemEntity {
  item: RecommendationItem;
  logging: Logging;
  render: Render;
}

export interface RecommendationItem {
  sno: number;
  name: string;
  market_sno: number;
  market_name: string;
  image: string;
  closed_reason: null;
  sell_count: number;
  delivery_type: DeliveryType;
  ranking: null;
  available_only_new_member: boolean;
  first_page_rendering: FirstPageRendering;
  is_premium_hotdeal: boolean;
  is_hotdeal: boolean;
  is_new: boolean;
  price: number;
  discount_rate: number;
  like: Like;
  ad: null;
  on_return: null;
  market_type: MarketType;
  category_name: CategoryName;
  feedback_type: null;
  remote_deeplink: string;
}

export enum CategoryName {
  롱팬츠 = "롱팬츠",
}

export enum DeliveryType {
  Standard = "standard",
  Today = "today",
}

export interface FirstPageRendering {
  goods_name: string;
  market_name: null | string;
  cover_image: string;
  market_image: null | string;
  discount_rate: number;
  original_price: number;
  price: number;
}

export interface Like {
  goods_sno: number;
  is_liked: boolean;
  folder_sno: null;
  referrer: Referrer;
}

export interface Referrer {
  list_id: ListID;
  list_index: number;
}

export enum ListID {
  CategorySubListRecommend = "category_sub_list_recommend",
}

export enum MarketType {
  셀럽 = "셀럽",
  쇼핑몰 = "쇼핑몰",
  프리미엄브랜드 = "프리미엄 브랜드",
}

export interface Logging {
  analytics: Analytics;
  inhouse: Inhouse;
}

export interface Analytics {
  GOODS_SNO: string;
  GOODS_NAME: string;
  MARKET_TYPE: MarketType;
  MARKET_SNO: string;
  MARKET_NAME: string;
  CATEGORY_SNO: string;
  CATEGORY_NAME: CategoryName;
  STANDARD_CATEGORY_SNO: string;
  STANDARD_CATEGORY_NAME: CategoryName;
  DISCOUNT_RATE: number;
  SALES_PRICE: number;
  SALES_PRICE_RANGE: string;
  IS_NEW: string;
  DELIVERY_TYPE: DeliveryType;
  IS_AD: string;
  LIST_PARAMS: null;
  MARKET_TYPE_SNO: string;
  REVIEW_COUNT: number;
  REVIEW_COUNT_RANGE: string;
  REVIEW_RATING: number;
  LIKES_COUNT: number;
  LIKES_COUNT_RANGE: string;
  DELIVERY_SCORE: null;
  PROMOTION_TAG: PromotionTag[];
  UPCOMMING_SOLDOUT: UpcommingSoldout;
  HAS_AWARD: boolean;
  IS_ONLY_ABLY: boolean;
  LIST_ID: ListID;
  LIST_INDEX: number;
  BRAND_SNO?: number;
  BRAND_NAME?: string;
  CARD_TYPE: CARDTYPEEnum;
}

export enum CARDTYPEEnum {
  GoodsCard = "GOODS_CARD",
}

export enum PromotionTag {
  Brand = "BRAND",
  RemainStockCount = "REMAIN_STOCK_COUNT",
}

export enum UpcommingSoldout {
  B = "B",
  Empty = "",
}

export interface Inhouse {
  goods_sno: number;
  list_id: ListID;
  list_index: number;
  schema_name: SchemaName;
  pool: Pool;
}

export enum Pool {
  Cbf = "cbf",
  PopReco = "pop_reco",
}

export enum SchemaName {
  Goods = "Goods",
}

export interface Render {
  type: RenderType;
  contents: Content[];
  size: Size;
  data: Data;
}

export enum Content {
  Chips = "CHIPS",
  Market = "MARKET",
  Name = "NAME",
  Nudging = "NUDGING",
  Price = "PRICE",
}

export interface Data {
  image: Image;
  name: string;
  price: string;
  has_ad_badge: boolean;
  name_lines: number;
  discount_rate: null | string;
  closed_reason: null;
  image_badge: null | string;
  image_badge_width: number | null;
  image_badge_height: number | null;
  chips: Chip[] | null;
  market_name: string;
  store_text: string;
  nudging_text: null | string;
  ranking: null;
  actions: Action[];
  discount_end_text: null;
  top_nudging_text: null;
  price_description: null;
  today_delivery_order_deadline_time: null;
}

export enum Action {
  Like = "LIKE",
}

export interface Chip {
  type: ChipType;
  name: Name;
  meta?: Meta;
}

export interface Meta {
  text_style: string;
  text_color: string;
  bg_color: string;
  border_color: string;
  border_width: number;
  rounded_corner_radius: number;
}

export enum Name {
  브랜드 = "브랜드",
  품절임박 = "품절임박",
}

export enum ChipType {
  Brand = "BRAND",
  DittoText = "DITTO_TEXT",
}

export interface Image {
  url: string;
  use_animation: boolean;
  ratio: number;
}

export enum Size {
  Medium = "MEDIUM",
}

export enum RenderType {
  Market = "MARKET",
  MarketChips = "MARKET_CHIPS",
  MarketNudging = "MARKET_NUDGING",
}
