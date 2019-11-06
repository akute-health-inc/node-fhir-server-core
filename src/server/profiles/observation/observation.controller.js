/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

/**
 * @description Construct a resource with base_version/uscore path
 */
let getResourceConstructor = base_version => {
	return require(resolveFromVersion(base_version, 'Observation'));
};

/**
 * @description Controller for getting a resource by history version id
 */
module.exports.searchByVersionId = function searchByVersionId({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version, version_id } = req.sanitized_args;
		let Observation = getResourceConstructor(base_version);

		return service
			.searchByVersionId(req.sanitized_args, req.contexts, logger)
			.then(results =>
				responseUtils.handleSingleReadResponse(res, next, base_version, Observation, results, version_id),
			)
			.catch(err => {
				next(errors.internal(err, base_version));
			});
	};
};

module.exports.search = function search({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;
		let Observation = getResourceConstructor(base_version);

		return service
			.search(req.sanitized_args, req.contexts, logger)
			.then(results =>
				responseUtils.handleBundleReadResponse(res, base_version, Observation, results, {
					resourceUrl: config.auth.resourceServer,
				}),
			)
			.catch(err => {
				next(errors.internal(err, base_version));
			});
	};
};

module.exports.searchById = function searchById({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;
		let Observation = getResourceConstructor(base_version);

		return service
			.searchById(req.sanitized_args, req.contexts, logger)
			.then(results => {
				responseUtils.handleSingleReadResponse(res, next, base_version, Observation, results);
			})
			.catch(err => {
				next(errors.internal(err, base_version));
			});
	};
};

/**
 * @description Controller for creating a observation
 */
module.exports.create = function create({ profile, logger, app, config }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;
		let resource_body = req.body;
		// Get a version specific observation
		let Observation = getResourceConstructor(base_version);
		// Validate the resource type before creating it
		let resource_type = Array.isArray(resource_body) ? resource_body[0].resourceType : resource_body.resourceType;
		if (Observation.resourceType !== resource_type) {
			return next(
				errors.invalidParameter(
					`'resourceType' expected to have value of '${Observation.resourceType}', received '${
						resource_type
					}'`,
					base_version,
				),
			);
		}
		// Create a new observation resource and pass it to the service
		// let observation = new Observation(resource_body);
		let args = { base_version, resource: resource_body };
		// Pass any new information to the underlying service
		return service
			.create(args, req.contexts, logger)
			.then(results =>
				responseUtils.handleCreateResponse(req, res, base_version, Observation.resourceType, results, {
					resourceUrl: config.auth.resourceServer,
				}),
			)
			.catch(err => {
				next(errors.internal(err, base_version));
			});
	};
};

/**
 * @description Controller for updating/creating a observation. If the observation does not exist, it should be updated
 */
module.exports.update = function update({ profile, logger, config }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version, id } = req.sanitized_args;
		let resource_body = req.body;

		// Get a version specific observation
		let Observation = getResourceConstructor(base_version);
		// Validate the resource type before creating it
		if (Observation.resourceType !== resource_body.resourceType) {
			return next(
				errors.invalidParameter(
					`'resourceType' expected to have value of '${Observation.resourceType}', received '${
						resource_body.resourceType
					}'`,
					base_version,
				),
			);
		}
		// Create a new observation resource and pass it to the service
		let observation = new Observation(resource_body);
		let args = id, base_version, resource: observation };
		// Pass any new information to the underlying service
		return service
			.update(args, req.contexts, logger)
			.then(results =>
				responseUtils.handleUpdateResponse(req, res, base_version, Observation.resourceType, results, {
					resourceUrl: config.auth.resourceServer,
				}),
			)
			.catch(err => {
				next(errors.internal(err, base_version));
			});
	};
};

/**
 * @description Controller for deleting an observation resource.
 */
module.exports.remove = function remove({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;

		return service
			.remove(req.sanitized_args, req.contexts, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, base_version, err);
			});
	};
};

/**
 * @description Controller for getting the history of a Observation resource.
 */
module.exports.history = function history({ profile, logger, config }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;
		// Get a version specific Observation
		let Observation = getResourceConstructor(base_version);

		return service
			.history(req.sanitized_args, req.contexts, logger)
			.then(results =>
				responseUtils.handleBundleHistoryResponse(res, base_version, Observation, results, {
					resourceUrl: config.auth.resourceServer,
				}),
			)
			.catch(err => {
				next(errors.internal(err, base_version));
			});
	};
};

/**
 * @description Controller for getting the history of a Observation resource by ID.
 */
module.exports.historyById = function historyById({ profile, logger, config }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;
		// Get a version specific Observation
		let Observation = getResourceConstructor(base_version);

		return service
			.historyById(req.sanitized_args, req.contexts, logger)
			.then(results =>
				responseUtils.handleBundleHistoryResponse(res, base_version, Observation, results, {
					resourceUrl: config.auth.resourceServer,
				}),
			)
			.catch(err => {
				next(errors.internal(err, base_version));
			});
	};
};
