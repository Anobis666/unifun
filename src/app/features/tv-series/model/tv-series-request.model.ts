import { TvSeriesModel } from "./tv-series.model";

export interface GetTvSeriesRequest {
    user_id: string;

}
export interface DeleteTvSeriesRequest {
    user_id: string;
    tvSeries_id: string;

}
export interface UpdateTvSeriesRequest {
    user_id: string;
    tvSeries_id: string;
    data: TvSeriesModel
}

export interface TvSeriesForm{
    year: string,
    description: string,
    title: string,
    actor: string,
    image_url: string,
    tvSerie_id:string,
    file: any
  }