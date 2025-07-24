// src/utils/apiHelpers.ts
export const cleanStrapiList = (list: any[]) => {
  return list.map((item) => ({
    id: item.id,
    ...item.attributes,
  }));
};

export const cleanStrapiItem = (item: any) => {
  return {
    id: item.id,
    ...item.attributes,
  };
};
