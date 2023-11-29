import CETEI from "CETEIcean";

const loadXml = async (url: string) => {
  const CETEIcean = new CETEI();

  const response = await fetch(url);
  const xmlString = await response.text();

  const xmlDoc = await CETEIcean.makeHTML5(xmlString);

  return [xmlDoc, xmlString];
};

export { loadXml };
