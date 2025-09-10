import type { PopulatedCampaign } from "~/types/type";

interface CampaignsResponse {
  campaigns: PopulatedCampaign[];
}

interface FCampaignsResponse {
  Fcampaigns: PopulatedCampaign[];
}

type CreateCampaignPayload = {
  title: string;
  description: string;
  problem: string;
  solutions: string[];
  category: string;
  type: string;
  target: number;
  mediaFiles: File[]; // NEW name avoids conflict
};

export default () => {
  const createCampaign = async (campaignData: CreateCampaignPayload) => {
    const form = new FormData();

    form.append("title", campaignData.title);
    form.append("description", campaignData.description);
    form.append("problem", campaignData.problem);
    campaignData.solutions.forEach((solution) => {
      form.append("solutions[]", solution);
    });
    form.append("category", campaignData.category);
    form.append("type", campaignData.type);
    form.append("target", campaignData.target.toString());

    campaignData.mediaFiles.forEach((mediaFile, index) => {
      form.append("media_file_" + index, mediaFile);
    });

    return await $fetch('/api/campaign/register', {
      method: 'POST',
      body: form
    });
  };

  const getCampaigns = async (): Promise<CampaignsResponse> => {
    return await $fetch<CampaignsResponse>('/api/campaign');
  };

  const getFCampaigns = async (): Promise<FCampaignsResponse> => {
    return await $fetch<FCampaignsResponse>('/api/campaign/f');
  };

  const getOtherCampaigns = async (): Promise<CampaignsResponse> => {
    return await $fetch<CampaignsResponse>('/api/campaign/other');
  };

  const verifyCampaign = async (title: string): Promise<any> => {
    return await $fetch('/api/campaign/verify', {
      method: 'POST',
      body: { title }
    });
  };

  return {
    createCampaign,
    getCampaigns,
    getFCampaigns,
    getOtherCampaigns,
    verifyCampaign,
  };
};
