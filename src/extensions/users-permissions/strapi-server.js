module.exports = (plugin) => {
  plugin.controllers.user.updateMe = async (ctx) => {
    if (!ctx.state.user || !ctx.state.user.id) {
      return (ctx.response.status = 401);
    }
    // const billingData = ctx.request.body.billingAddress;
    await strapi.entityService
      .update(
        "plugin::users-permissions.user",
        ctx.state.user.id,
        ctx.request.body
      )
      .then((res) => {
        ctx.response.status = 200;
      });
  };

  plugin.routes["content-api"].routes.push({
    method: "PUT",
    path: "/user/me",
    handler: "user.updateMe",
    config: {
      prefix: "",
      policies: [],
    },
  });

  return plugin;
};
