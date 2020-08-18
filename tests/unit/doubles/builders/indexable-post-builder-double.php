<?php

namespace Yoast\WP\SEO\Tests\Unit\Doubles\Builders;

use Yoast\WP\SEO\Builders\Indexable_Post_Builder;
use Yoast\WP\SEO\Helpers\Post_Helper;
use Yoast\WP\SEO\Loggers\Logger;
use Yoast\WP\SEO\Models\Indexable;
use Yoast\WP\SEO\Repositories\SEO_Meta_Repository;

/**
 * Class Indexable_Post_Builder_Double.
 */
class Indexable_Post_Builder_Double extends Indexable_Post_Builder {

	/**
	 * @inheritDoc
	 */
	public function is_public( $indexable ) {
		return parent::is_public( $indexable );
	}

	/**
	 * @inheritDoc
	 */
	public function is_public_attachment( $indexable ) {
		return parent::is_public_attachment( $indexable );
	}

	/**
	 * @inheritDoc
	 */
	public function has_public_posts( $indexable ) {
		return parent::has_public_posts( $indexable );
	}

	/**
	 * @inheritDoc
	 */
	public function find_alternative_image( $indexable ) {
		return parent::find_alternative_image( $indexable );
	}
}
