/**
 * @name exports
 * @summary ExpansionProfile Class
 */
module.exports = class ExpansionProfile {
	constructor(opts) {
		// Create an object to store all props
		Object.defineProperty(this, '__data', { value: {} });

		// Define getters and setters as enumerable

		Object.defineProperty(this, '_id', {
			enumerable: true,
			get: () => this.__data._id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._id = new Element(value);
			},
		});

		Object.defineProperty(this, 'id', {
			enumerable: true,
			get: () => this.__data.id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.id = value;
			},
		});

		Object.defineProperty(this, 'meta', {
			enumerable: true,
			get: () => this.__data.meta,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Meta = require('./meta.js');
				this.__data.meta = new Meta(value);
			},
		});

		Object.defineProperty(this, '_implicitRules', {
			enumerable: true,
			get: () => this.__data._implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._implicitRules = new Element(value);
			},
		});

		Object.defineProperty(this, 'implicitRules', {
			enumerable: true,
			get: () => this.__data.implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.implicitRules = value;
			},
		});

		Object.defineProperty(this, '_language', {
			enumerable: true,
			get: () => this.__data._language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._language = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		Object.defineProperty(this, 'language', {
			enumerable: true,
			get: () => this.__data.language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.language = value;
			},
		});

		Object.defineProperty(this, 'text', {
			enumerable: true,
			get: () => this.__data.text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Narrative = require('./narrative.js');
				this.__data.text = new Narrative(value);
			},
		});

		Object.defineProperty(this, 'contained', {
			enumerable: true,
			get: () => this.__data.contained,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contained = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'extension', {
			enumerable: true,
			get: () => this.__data.extension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.extension = Array.isArray(value) ? value.map(v => new Extension(v)) : [new Extension(value)];
			},
		});

		Object.defineProperty(this, 'modifierExtension', {
			enumerable: true,
			get: () => this.__data.modifierExtension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.modifierExtension = Array.isArray(value)
					? value.map(v => new Extension(v))
					: [new Extension(value)];
			},
		});

		Object.defineProperty(this, '_url', {
			enumerable: true,
			get: () => this.__data._url,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._url = new Element(value);
			},
		});

		Object.defineProperty(this, 'url', {
			enumerable: true,
			get: () => this.__data.url,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.url = value;
			},
		});

		Object.defineProperty(this, 'identifier', {
			enumerable: true,
			get: () => this.__data.identifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.identifier = new Identifier(value);
			},
		});

		Object.defineProperty(this, '_version', {
			enumerable: true,
			get: () => this.__data._version,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._version = new Element(value);
			},
		});

		Object.defineProperty(this, 'version', {
			enumerable: true,
			get: () => this.__data.version,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.version = value;
			},
		});

		Object.defineProperty(this, '_name', {
			enumerable: true,
			get: () => this.__data._name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._name = new Element(value);
			},
		});

		Object.defineProperty(this, 'name', {
			enumerable: true,
			get: () => this.__data.name,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.name = value;
			},
		});

		Object.defineProperty(this, '_status', {
			enumerable: true,
			get: () => this.__data._status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._status = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		Object.defineProperty(this, 'status', {
			enumerable: true,
			get: () => this.__data.status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.status = value;
			},
		});

		Object.defineProperty(this, '_experimental', {
			enumerable: true,
			get: () => this.__data._experimental,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._experimental = new Element(value);
			},
		});

		Object.defineProperty(this, 'experimental', {
			enumerable: true,
			get: () => this.__data.experimental,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.experimental = value;
			},
		});

		Object.defineProperty(this, '_date', {
			enumerable: true,
			get: () => this.__data._date,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._date = new Element(value);
			},
		});

		Object.defineProperty(this, 'date', {
			enumerable: true,
			get: () => this.__data.date,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.date = value;
			},
		});

		Object.defineProperty(this, '_publisher', {
			enumerable: true,
			get: () => this.__data._publisher,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._publisher = new Element(value);
			},
		});

		Object.defineProperty(this, 'publisher', {
			enumerable: true,
			get: () => this.__data.publisher,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.publisher = value;
			},
		});

		Object.defineProperty(this, 'contact', {
			enumerable: true,
			get: () => this.__data.contact,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ContactDetail = require('./contactdetail.js');
				this.__data.contact = Array.isArray(value) ? value.map(v => new ContactDetail(v)) : [new ContactDetail(value)];
			},
		});

		Object.defineProperty(this, '_description', {
			enumerable: true,
			get: () => this.__data._description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._description = new Element(value);
			},
		});

		Object.defineProperty(this, 'description', {
			enumerable: true,
			get: () => this.__data.description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.description = value;
			},
		});

		Object.defineProperty(this, 'useContext', {
			enumerable: true,
			get: () => this.__data.useContext,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let UsageContext = require('./usagecontext.js');
				this.__data.useContext = Array.isArray(value) ? value.map(v => new UsageContext(v)) : [new UsageContext(value)];
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		Object.defineProperty(this, 'jurisdiction', {
			enumerable: true,
			get: () => this.__data.jurisdiction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.jurisdiction = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'fixedVersion', {
			enumerable: true,
			get: () => this.__data.fixedVersion,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExpansionProfileFixedVersion = require('./expansionprofilefixedversion.js');
				this.__data.fixedVersion = Array.isArray(value)
					? value.map(v => new ExpansionProfileFixedVersion(v))
					: [new ExpansionProfileFixedVersion(value)];
			},
		});

		Object.defineProperty(this, 'excludedSystem', {
			enumerable: true,
			get: () => this.__data.excludedSystem,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExpansionProfileExcludedSystem = require('./expansionprofileexcludedsystem.js');
				this.__data.excludedSystem = new ExpansionProfileExcludedSystem(value);
			},
		});

		Object.defineProperty(this, '_includeDesignations', {
			enumerable: true,
			get: () => this.__data._includeDesignations,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._includeDesignations = new Element(value);
			},
		});

		Object.defineProperty(this, 'includeDesignations', {
			enumerable: true,
			get: () => this.__data.includeDesignations,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.includeDesignations = value;
			},
		});

		Object.defineProperty(this, 'designation', {
			enumerable: true,
			get: () => this.__data.designation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ExpansionProfileDesignation = require('./expansionprofiledesignation.js');
				this.__data.designation = new ExpansionProfileDesignation(value);
			},
		});

		Object.defineProperty(this, '_includeDefinition', {
			enumerable: true,
			get: () => this.__data._includeDefinition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._includeDefinition = new Element(value);
			},
		});

		Object.defineProperty(this, 'includeDefinition', {
			enumerable: true,
			get: () => this.__data.includeDefinition,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.includeDefinition = value;
			},
		});

		Object.defineProperty(this, '_activeOnly', {
			enumerable: true,
			get: () => this.__data._activeOnly,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._activeOnly = new Element(value);
			},
		});

		Object.defineProperty(this, 'activeOnly', {
			enumerable: true,
			get: () => this.__data.activeOnly,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.activeOnly = value;
			},
		});

		Object.defineProperty(this, '_excludeNested', {
			enumerable: true,
			get: () => this.__data._excludeNested,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._excludeNested = new Element(value);
			},
		});

		Object.defineProperty(this, 'excludeNested', {
			enumerable: true,
			get: () => this.__data.excludeNested,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.excludeNested = value;
			},
		});

		Object.defineProperty(this, '_excludeNotForUI', {
			enumerable: true,
			get: () => this.__data._excludeNotForUI,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._excludeNotForUI = new Element(value);
			},
		});

		Object.defineProperty(this, 'excludeNotForUI', {
			enumerable: true,
			get: () => this.__data.excludeNotForUI,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.excludeNotForUI = value;
			},
		});

		Object.defineProperty(this, '_excludePostCoordinated', {
			enumerable: true,
			get: () => this.__data._excludePostCoordinated,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._excludePostCoordinated = new Element(value);
			},
		});

		Object.defineProperty(this, 'excludePostCoordinated', {
			enumerable: true,
			get: () => this.__data.excludePostCoordinated,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.excludePostCoordinated = value;
			},
		});

		Object.defineProperty(this, '_displayLanguage', {
			enumerable: true,
			get: () => this.__data._displayLanguage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._displayLanguage = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		Object.defineProperty(this, 'displayLanguage', {
			enumerable: true,
			get: () => this.__data.displayLanguage,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.displayLanguage = value;
			},
		});

		Object.defineProperty(this, '_limitedExpansion', {
			enumerable: true,
			get: () => this.__data._limitedExpansion,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._limitedExpansion = new Element(value);
			},
		});

		Object.defineProperty(this, 'limitedExpansion', {
			enumerable: true,
			get: () => this.__data.limitedExpansion,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.limitedExpansion = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ExpansionProfile',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ExpansionProfile';
	}

	toJSON() {
		return {
			resourceType: this.resourceType,
			_id: this._id && this._id.toJSON(),
			id: this.id,
			meta: this.meta && this.meta.toJSON(),
			_implicitRules: this._implicitRules && this._implicitRules.toJSON(),
			implicitRules: this.implicitRules,
			_language: this._language && this._language.toJSON(),
			language: this.language,
			text: this.text && this.text.toJSON(),
			contained: this.contained,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_url: this._url && this._url.toJSON(),
			url: this.url,
			identifier: this.identifier && this.identifier.toJSON(),
			_version: this._version && this._version.toJSON(),
			version: this.version,
			_name: this._name && this._name.toJSON(),
			name: this.name,
			_status: this._status && this._status.toJSON(),
			status: this.status,
			_experimental: this._experimental && this._experimental.toJSON(),
			experimental: this.experimental,
			_date: this._date && this._date.toJSON(),
			date: this.date,
			_publisher: this._publisher && this._publisher.toJSON(),
			publisher: this.publisher,
			contact: this.contact && this.contact.map(v => v.toJSON()),
			_description: this._description && this._description.toJSON(),
			description: this.description,
			useContext: this.useContext && this.useContext.map(v => v.toJSON()),
			jurisdiction: this.jurisdiction && this.jurisdiction.map(v => v.toJSON()),
			fixedVersion: this.fixedVersion && this.fixedVersion.map(v => v.toJSON()),
			excludedSystem: this.excludedSystem && this.excludedSystem.toJSON(),
			_includeDesignations: this._includeDesignations && this._includeDesignations.toJSON(),
			includeDesignations: this.includeDesignations,
			designation: this.designation && this.designation.toJSON(),
			_includeDefinition: this._includeDefinition && this._includeDefinition.toJSON(),
			includeDefinition: this.includeDefinition,
			_activeOnly: this._activeOnly && this._activeOnly.toJSON(),
			activeOnly: this.activeOnly,
			_excludeNested: this._excludeNested && this._excludeNested.toJSON(),
			excludeNested: this.excludeNested,
			_excludeNotForUI: this._excludeNotForUI && this._excludeNotForUI.toJSON(),
			excludeNotForUI: this.excludeNotForUI,
			_excludePostCoordinated: this._excludePostCoordinated && this._excludePostCoordinated.toJSON(),
			excludePostCoordinated: this.excludePostCoordinated,
			_displayLanguage: this._displayLanguage && this._displayLanguage.toJSON(),
			displayLanguage: this.displayLanguage,
			_limitedExpansion: this._limitedExpansion && this._limitedExpansion.toJSON(),
			limitedExpansion: this.limitedExpansion,
		};
	}
};
