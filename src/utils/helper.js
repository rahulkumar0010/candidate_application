export function capitalizeEachWord(sentence) {
  if (typeof sentence !== "string" || sentence.length === 0) {
    return "";
  }

  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export const filterHandler = (data, filterData) => {
  if (data?.length < 1) return data;

  // Filter jobs based on filterData
  const filteredJobs = data.filter((job) => {
    for (let key in filterData) {
      if (
        key === "minExp" &&
        filterData[key] &&
        job.minExp < parseInt(filterData[key])
      ) {
        return false;
      }
      if (key === "companyName" && filterData[key]) {
        // Use regular expression for a "like" query on company name
        const regex = new RegExp(filterData[key], "i");
        if (!regex.test(job.companyName)) {
          return false;
        }
      }
      if (
        key === "location" &&
        filterData[key] &&
        job.location?.toLowerCase() !== filterData[key]?.toLowerCase()
      ) {
        return false;
      }
      if (
        key === "remote" &&
        filterData[key] &&
        job.location !== filterData[key]
      ) {
        return false;
      }
      if (
        key === "techStack" &&
        filterData[key] &&
        job.jobRole.toLowerCase() !== filterData[key].toLowerCase()
      ) {
        return false;
      }
      if (
        key === "jobRole" &&
        filterData[key] &&
        job.jobRole.toLowerCase() !== filterData[key].toLowerCase()
      ) {
        return false;
      }
      if (
        key === "minJdSalary" &&
        filterData[key] &&
        Number(job.minJdSalary) < Number(filterData[key])
      ) {
        return false;
      }
    }
    return true;
  });
  return filteredJobs;
};
