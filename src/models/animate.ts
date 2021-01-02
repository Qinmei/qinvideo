import { Urls, Methods } from "@/constants";
import { Model } from "@/action/model";
import {
  InitialState,
  ListRes,
  ItemRes,
  DeleteReq,
  UpdateListReq,
  UpdateItemReq,
} from "@/types/animate";
import { ListQuery, IdQuery, OptionReturn } from "@/types/global";
import { RequestRes } from "@/types/request";

export class Animate extends Model<InitialState> {
  constructor() {
    super("animate", {
      list: [],
      total: 0,
    });
  }

  initDispatch = {
    animate: (res: RequestRes<ListRes>) =>
      super.dispatch({
        list: res.data.list,
        total: res.data.total,
      }),
  };

  methods = {
    getAnimateList: (query: ListQuery) =>
      super.init<ListRes>(Methods.GET, Urls.queryAnimate, { query }, this.initDispatch.animate),
    createAnimateList: (data: ListQuery) =>
      super.init<ItemRes>(Methods.POST, Urls.queryAnimate, { data }),
    updateAnimateList: (data: UpdateListReq) =>
      super.init<OptionReturn>(Methods.PUT, Urls.queryAnimate, { data }),
    deleteAnimateList: (data: DeleteReq) =>
      super.init<OptionReturn>(Methods.DELETE, Urls.queryAnimate, { data }),
    getAnimateItem: (params: IdQuery) =>
      super.init<ItemRes>(Methods.GET, Urls.singleAnimate, { params }),
    updateAnimateItem: ({ id, ...data }: UpdateItemReq) =>
      super.init<OptionReturn>(Methods.PUT, Urls.singleAnimate, { params: { id }, data }),
    deleteAnimateItem: (params: IdQuery) =>
      super.init<OptionReturn>(Methods.DELETE, Urls.singleAnimate, { params }),
  };
}
