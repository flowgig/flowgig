<div>
    <i>
        <small>
            @if(isset($model->updater))
                Last updated {{ $model->updated_at }} UTC by {{ $model->updater->name }}
            @else
                Created {{ $model->created_at }} UTC by {{ $model->creator->name }}
            @endif
        </small>
    </i>
</div>
